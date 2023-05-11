import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthProfessionnelService {

  private isAuthenticated = false;
  Url = environment.apiUrl;

  constructor(private router: Router, private httpClient: HttpClient) { }

  loginAdmin(email: string, password: string): Observable<any> {
    const url = this.Url + '/login';

    const body = { email: email, password: password };


    
    return this.httpClient.post(url, body);
  }

  logout(): void {
    this.clearCookie('pro_data');
    this.router.navigate(['/public/login-professionnel']);
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    this.checkCookieExpiration();

    return this.getCookie('pro_data') !== null;
  }

  getCookie(name: string): string | null {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
      return parts.pop()?.split(";").shift() || null;
    }
    return null;
  }

  clearCookie(name: string): void {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  }

  checkCookieExpiration(): void {
    // Get the cookie value
    const cookieValue = this.getCookie('pro_data');

    if (cookieValue) {
      try {
        // Parse the JSON string back into an object
        const data = JSON.parse(cookieValue);

        // Get the expiration time from the cookie data
        const expirationTime = new Date(data.expiration);

        // Check if the cookie has expired
        if (expirationTime < new Date()) {
          // Clear the expired cookie
          this.clearCookie('pro_data');

          // Navigate the user to the login page
          this.router.navigate(['/public/login-professionnel']);
        } else {
          // Add 20 minutes to the expiration time
          const expirationDate = new Date();
          expirationDate.setMinutes(expirationDate.getMinutes() + 20);

          document.cookie = `pro_data=${JSON.stringify(data)}; expires=${expirationDate.toUTCString()}; path=/;`;

        }
      } catch (error) {
        console.error('Error parsing the expiration time:', error);
        // Clear the invalid cookie
        this.clearCookie('pro_data');
        // Navigate the user to the login page
        this.router.navigate(['/public/login-professionnel']);
      }
    } else {
      // If there's no cookie, navigate the user to the login page
      this.router.navigate(['/public/login-professionnel']);

    }
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthPatientService {

  private isAuthenticated = false;
  Url = environment.apiUrl;

  constructor(private router: Router, private httpClient: HttpClient) { }

  loginAdmin(email: string, password: string): Observable<any> {
    const url = this.Url + '/login-patient';

    const body = { email: email, password: password };

    return this.httpClient.post(url, body);
  }

  logout(): void {
    this.clearCookie('user_data');
    this.router.navigate(['/public/login-patient']);
  }

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return this.getCookie('user_data') !== null;
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
}

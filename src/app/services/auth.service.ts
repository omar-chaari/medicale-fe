import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  Url = environment.apiUrl;

  constructor(private router: Router, private httpClient: HttpClient) { }

  loginAdmin(email: string, password: string): Observable<any> {
    const url = this.Url + '/login-admin';


    const body = { email: email, password: password };

    return this.httpClient.post(url, body);
  }


  logout(): void {
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/public/login']);
  }


  // Check if the user is logged in
  isLoggedIn(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

}

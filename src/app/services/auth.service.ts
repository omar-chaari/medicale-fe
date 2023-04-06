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

  constructor(private router: Router, private httpClient: HttpClient) { }

  loginAdmin(email: string, password: string): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/login-admin';
  
  
    const body = { email: email, password: password };

    return this.httpClient.post(url, body);
  }


  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
  setAuthenticated(authenticated: boolean): void {
    this.isAuthenticated = authenticated;
  }
  
}

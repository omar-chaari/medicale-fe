import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const secureReq = req.clone({
      setHeaders: { Authorization: `Bearer ${tokenGetter()}` },

    });

    return next.handle(secureReq);
  }
}

export function tokenGetter() {
  return localStorage.getItem('api_key');
}
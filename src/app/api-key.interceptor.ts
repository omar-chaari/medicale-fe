import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiKey = 'YOUR_API_KEY'; // Replace with the actual API key or retrieve it from a secure storage
    const modifiedReq = req.clone({
      headers: req.headers.set('Api-Key', apiKey)
    });

    return next.handle(modifiedReq);
  }
}

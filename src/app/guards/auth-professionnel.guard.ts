import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthProfessionnelService } from '../services/auth-professionnel.service';
@Injectable({
  providedIn: 'root'
})
export class AuthProfessionnelGuard implements CanActivate {
  constructor(private authPatientService: AuthProfessionnelService, private router: Router
    ) {
  
  
    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authPatientService.isLoggedIn()) {
      return true;
    } else {
      // Redirect to the login page if not authenticated
      this.router.navigate(['/public/login-professionnel']);
      return false;
    }
  }
  
}

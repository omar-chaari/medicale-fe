import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthPatientService } from 'src/app/services/auth-patient.service';

@Injectable({
  providedIn: 'root'
})
export class AuthPatientGuard implements CanActivate {

  constructor(private authPatientService: AuthPatientService, private router: Router
    ) {
  
  
    }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authPatientService.isLoggedIn()) {
      return true;
    } else {
      // Redirect to the login page if not authenticated
      this.router.navigate(['/public/login-patient']);
      return false;
    }
  }
  
}

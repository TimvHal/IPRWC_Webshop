import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AdminGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router){}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.authenticated && this.authService.isAdmin()) {
        return true;
      }
      this.router.navigate(['/main']);
      return false;
    }
}


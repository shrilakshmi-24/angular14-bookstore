import { CanActivate, } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    return this.authService.isAuthenticated
}
}


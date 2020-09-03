import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
  	private accountService: AccountService,
    private router: Router
  	){

  }	
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var token = this.accountService.getToken();
      if (token && token !== "" && token !== undefined && token !== null) {
        return true;
    } else {        
        this.router.navigate(['login']);
        return false;
    }

  }
  
}

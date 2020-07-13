import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { getUser } from 'src/app/helpers/storage.helper';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router) { }

    isLoggedIn() {
        if (getUser()) {
            return true;
        } else {
            this.router.navigate(["/login"]);
        }
    }

    canActivate() {
        return this.isLoggedIn();
    }


    canActivateChild() {
        return this.isLoggedIn();
    }

}
/**
 * @author dee
 */ import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {LocalStorageService} from "../shared-services/local-storage.service";
import {Observable} from "rxjs";
import {JwtTokenService} from "./jwt-token.service";
import {EnvironmentService} from "../environment.service";


@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
    constructor(
        private localStorageService: LocalStorageService,
        private environmentService: EnvironmentService,
        private jwtService: JwtTokenService,
        private routerService: Router
    ) {
    }

    // @see https://www.syncfusion.com/blogs/post/best-practices-for-jwt-authentication-in-angular-apps.aspx
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if(this.environmentService.enableDebugTools)
            console.log('route to redirect to', state.url);
        if (this.jwtService.isTokenExpired()) {
            this.localStorageService.redirectUrl = state.url;
            return this.routerService.createUrlTree(['/auth/login']);
        } else {
            return true;
        }
    }

}

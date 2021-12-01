import { Injectable } from '@angular/core';
import {EnvironmentService} from "../environment.service";
import {LocalStorageService} from "../shared-services/local-storage.service";
import {HttpClient} from "@angular/common/http";
import {JwtTokenService} from "./jwt-token.service";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {User} from "../enum/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private registerUrl = `${ this.environmentService.baseUri}/users/user/register`;
  private loginUrl = `${ this.environmentService.baseUri}/users/user/login`;
  private verifyAccountUrl = `${ this.environmentService.baseUri}/users/user/confirmAccount`;

  constructor(private environmentService: EnvironmentService,
              private jwtTokenService: JwtTokenService,
              private localStorageService: LocalStorageService,
              private http: HttpClient) {



  }

  login(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.loginUrl, user);

  }

  isTokenExpired(): boolean {
    return this.jwtTokenService.isTokenExpired();
  }

  verifyToken(verification: {[key: string]: number | string}): Observable<boolean> {
    return this.http.post<boolean>(this.verifyAccountUrl, verification);
  }

  registerUser(user: User): Observable<User> {
    if(this.environmentService.enableDebugTools)
      console.log("user", user);
    return this.http.post<User>(this.registerUrl, user);
  }
}

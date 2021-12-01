import { Injectable } from '@angular/core';
import {LocalStorageService} from "../shared-services/local-storage.service";
import {LocalStorageKeys} from "../shared-services/local-storage-keys";
import jwtDecode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {
  decodedToken: { [key: string]: string } = {};
  constructor(private localStorageService: LocalStorageService) { }

  setToken(token: string) {
    if (token) {
      this.localStorageService.set(LocalStorageKeys.AUTH_TOKEN, token);
    }
  }


  decodeToken() {
    let jwtToken = this.localStorageService.get(LocalStorageKeys.AUTH_TOKEN);
    if (jwtToken) {
      this.decodedToken = jwtDecode(jwtToken);
    }
  }

  getDecodeToken() {
    return jwtDecode(this.localStorageService.get(LocalStorageKeys.AUTH_TOKEN)!);
  }

  get user() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['displayname'] : null;
  }

  getEmailId() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['email'] : null;
  }

  getExpiryTime() {
    this.decodeToken();
    return this.decodedToken ? this.decodedToken['exp'] : null;
  }

  isTokenExpired(): boolean {
    const expiryTime: string | null = this.getExpiryTime();
    if (expiryTime) {
      return ((1000 * +expiryTime) - (new Date()).getTime()) < 5000;
    } else {
      return true;
    }
  }
}

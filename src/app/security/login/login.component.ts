import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../login.service";
import {catchError, tap} from "rxjs";
import {Router} from "@angular/router";
import {JwtTokenService} from "../jwt-token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm = this.fb.group({
      "username": new FormControl("",[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      "password": new FormControl("", [
        Validators.required,
        Validators.minLength(3)
      ])
    });
   isSubmitClicked = false;
   isLoginSuccessful = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private jwtService: JwtTokenService,
              private loginService: LoginService) { }

  ngOnInit(): void {

    if (!this.loginService.isTokenExpired()) {
      this.router.navigate(['/site/welcome']);
    }
  }

  get username() {
    return this.loginForm.controls['username'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }
  onSubmit() {
    this.isSubmitClicked = true;
    if (!this.loginForm.valid) return;

    this.loginService.login(this.loginForm.value)
      .pipe(
        tap(isLoggedIn => this.isLoginSuccessful = isLoggedIn),
        // catchError(err => err)
      )
      .subscribe(isLoged => {
        this.jwtService.setToken("isLoged")
        this.isLoginSuccessful = isLoged;
      })
  }
}

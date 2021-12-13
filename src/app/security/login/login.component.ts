import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get username() {
    return this.loginForm.controls['username']
  }

  get password() {
    return this.loginForm.controls['password']
  }
  onSubmit() {
    this.isSubmitClicked = true;
    if (!this.loginForm.valid) return;
    this.loginForm.valueChanges.subscribe((va) => {
       console.log(va);
     })
  }
}

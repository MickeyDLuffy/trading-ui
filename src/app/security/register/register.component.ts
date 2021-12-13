import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    "firstname": new FormControl("", [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
    ]),
    "lastname": new FormControl("", [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
    ]),
    "email": new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    "password": new FormControl("", [
      Validators.required,
      Validators.minLength(3)
    ])
  })
  isSubmitClicked = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isSubmitClicked = true;
    if(!this.registerForm.valid) return;
  }
}

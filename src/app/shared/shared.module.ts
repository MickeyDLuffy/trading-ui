import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "../main/nav/nav.component";



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    NavComponent
  ]
})
export class SharedModule { }

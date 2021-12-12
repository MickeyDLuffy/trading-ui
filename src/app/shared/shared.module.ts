import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "../main/nav/nav.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    NavComponent
  ]
})
export class SharedModule { }

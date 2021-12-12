import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {MainRoutingModule} from "./main-routing.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    SharedModule,
    MainRoutingModule,
    MatSidenavModule,
  ]
})
export class MainModule { }

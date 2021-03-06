import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {MainRoutingModule} from "./main-routing.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {SharedModule} from "../shared/shared.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatListModule} from "@angular/material/list";
import { PortfolioComponent } from './portfolio/portfolio.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { MainModalComponent } from './main-modal/main-modal.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef} from "@angular/material/dialog";


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    PortfolioComponent,
    MainModalComponent
  ],
  imports: [
    SharedModule,
    MainRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  entryComponents: [MainModalComponent],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class MainModule { }

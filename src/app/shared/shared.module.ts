import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "../main/nav/nav.component";
import {RouterModule} from "@angular/router";
import { MarketDataTableComponent } from './market-data-table/market-data-table.component';



@NgModule({
  declarations: [NavComponent, MarketDataTableComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
    exports: [
        CommonModule,
        NavComponent,
        MarketDataTableComponent
    ]
})
export class SharedModule { }

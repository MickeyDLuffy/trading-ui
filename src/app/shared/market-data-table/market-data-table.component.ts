import { Component, OnInit } from '@angular/core';
import {MarketDataService} from "../../shared-services/market-data.service";
import {Observable} from "rxjs";
import {MarketData} from "../../model/MarketData";

@Component({
  selector: 'app-market-data-table',
  templateUrl: './market-data-table.component.html',
  styleUrls: ['./market-data-table.component.scss']
})
export class MarketDataTableComponent implements OnInit {
  marketData$?: Observable<MarketData>;
  constructor(private mdService: MarketDataService) { }

  ngOnInit(): void {
     this.marketData$ = this.mdService.getMarketData();
  }

  onBuy() {
    console.log("Bought data")
  }

  rowCliked() {
    console.log("row clickeed")
  }
}

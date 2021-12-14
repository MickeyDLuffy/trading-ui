import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market-data-table',
  templateUrl: './market-data-table.component.html',
  styleUrls: ['./market-data-table.component.scss']
})
export class MarketDataTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onBuy() {
    console.log("Bought data")
  }

  rowCliked() {
    console.log("row clickeed")
  }
}

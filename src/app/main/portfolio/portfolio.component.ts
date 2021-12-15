import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MainModalComponent} from "../main-modal/main-modal.component";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
    console.log("launching modal...")
    this.dialog.open(MainModalComponent);
  }
}

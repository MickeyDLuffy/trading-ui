import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.scss']
})
export class MainModalComponent implements OnInit {
  title = "Create new Portfolio";
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

}

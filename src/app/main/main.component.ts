import { Component, OnInit } from '@angular/core';
import {HamburgerService} from "./nav/hamburger.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isOpened = false;
  isOpened$?: Observable<boolean>
  constructor(private hamburgerService: HamburgerService) { }

  ngOnInit(): void {
    this.isOpened$ = this.hamburgerService.sidebarOpen$;
  }

  isBackDropClicked() {
    this.closeTheSideBar();
  }

  closeSideBar() {
    this.closeTheSideBar();
  }

  closeTheSideBar() {
    this.hamburgerService.toggleSidebar(false);
  }
}

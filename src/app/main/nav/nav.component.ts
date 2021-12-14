import {Component, Input, OnInit} from '@angular/core';
import {HamburgerService} from "./hamburger.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() hideAuthButtons: Boolean = false;
  @Input() hideHamburger: Boolean = false;
  constructor(private hamburgerService: HamburgerService) { }

  ngOnInit(): void {
  }

  onHamburgerClicked() {
     this.hamburgerService.toggleSidebar(true);
  }
}

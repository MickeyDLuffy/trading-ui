import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HamburgerService {
  private isSidebarOpen = true;
  private sidebarSubject = new BehaviorSubject<boolean>(this.isSidebarOpen);
  sidebarOpen$ = this.sidebarSubject.asObservable();
  constructor() { }


  toggleSidebar(status: boolean): void {
    this.isSidebarOpen = status;
    this.sidebarSubject.next(status);
  }



}

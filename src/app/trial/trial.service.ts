import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrialService {

  constructor() { }

  addTwo( a: number): number {
    return a + 2;
  }

  substractTwo(a: number): number {
    return a - 2;
  }
}

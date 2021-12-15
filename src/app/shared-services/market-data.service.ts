import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {MarketData} from "../model/MarketData";
@Injectable({
  providedIn: 'root'
})
export class MarketDataService {

  constructor() { }

  getMarketData(): Observable<MarketData> {
    console.log('creating an eventsource...')
    return new Observable(observer => {
      const eventSource = new EventSource('/interval-sse-observable');
      eventSource.onopen = event => {
        console.log('opening connection', eventSource.readyState)
      };
      eventSource.onmessage = event => {
        console.log('event from server..', event) ;
        observer.next(event);
      };
      eventSource.onerror = error => {
        console.log('error from server..', error)
      };
    });
  }
}

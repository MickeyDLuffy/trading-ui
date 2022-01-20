import { Component, OnInit } from '@angular/core';
import {
  catchError, concatMap, every,
  forkJoin, from, groupBy,
  map,
  mapTo, mergeMap,
  observable,
  Observable,
  Observer,
  of,
  pluck, reduce,
  scan,
  shareReplay, switchMap,
  tap, toArray
} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  postmanMockUrl = 'https://85de67b1-e622-460f-9821-c3d19f0a3595.mock.pstmn.io';
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    //
    // let http$ = new Observable((observer: Observer<Mock>) => {
    //      fetch(this.postmanMockUrl)
    //        .then(data => data.json())
    //        .then(data => {
    //          observer.next(data);
    //          observer.complete;
    //        })
    //        .catch(error => observer.error(error));
    // });
    let http$ = this.httpClient.get<any>(this.postmanMockUrl).pipe(shareReplay());
    let byId$ = this.httpClient.get<Mock>(`${this.postmanMockUrl}/60ea7db7-a823-46c5-849e-5cdef1c1b043`)

    // forkJoin([http$, byId$])
    //   .pipe(
    //     tap(([f, id]) => {
    //       console.log(id)
    //       console.log(f)
    //     })
    //   )
    //   .subscribe();
    const source = of(1, 2, 3);
    const people = [
      { name: 'Sue', age: 25 },
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 25 },
      { name: 'Sarah', age: 35 },
      { name: 'Sarah', age: 35 },
      { name: 'Sarah', age: 25 },
    ];
    from(people)
      .pipe(
        groupBy(p => p.age, p => p.name),
        mergeMap(group => group),
        tap(n => console.log(n))
      ).subscribe();
    source.pipe(
      // groupBy(v =>  ),
      // tap(v => console.log(v))
    ).subscribe();
// basic scan example, sum over time starting with zero
//     const example = source.pipe(reduce((acc, curr) => acc + curr, 0));
//     example.pipe(
//       tap(a => console.log(`accumulted ${a}`)),
//     ).subscribe(d => console.log(`subscribed acu ${d}`));
    // http$
    //   .pipe(
    //     map(res => res.id),
    //     catchError(error => of([]))
    //
    //   ).subscribe(data => console.log( data) );
  }

}

export interface Mock {
  id: string;
  description: string;
  category: string,
  lessonsCount: number,
  iconUrl: string,
  longDescription: string
}

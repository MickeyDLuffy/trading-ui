import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../model/Client";
import {EnvironmentService} from "../environment.service";

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  clientUrl = this.environmentService.baseUri + "/client";
  constructor(private httpClient: HttpClient,
              private environmentService: EnvironmentService) { }

  getClients(filter = '', sort = 'asc', page = 0, size = 2): Observable<Client[]> {
    let params  = new HttpParams()
      .set('sort', sort)
      .set('page', page.toString())
      .set('size', size.toString())
      .set('filter', filter);

    return this.httpClient.get<Client[]>(this.clientUrl, {params});
  }

  getClientById(clientId: string): Observable<Client> {
    return this.httpClient.get<Client>(this.clientUrl + `/${clientId}`);
  }

  saveClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.clientUrl, client);
  }

  update(clientId: string, changes: Partial<Client> ) {
    return this.httpClient.put<Client>(`${this.clientUrl}/${clientId}`, changes);
  }
}

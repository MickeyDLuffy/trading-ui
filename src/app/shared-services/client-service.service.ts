import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.clientUrl);
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

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private urlBase:string = 'http://localhost:3000/client';
  private httpClient = inject(HttpClient);
  constructor() { }

  //Get all client
  public findAllClient():Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.urlBase}`);
  }
  //Find client by id
  public findClientById(id:number):Observable<Client>{
    return this.httpClient.get<Client>(`${this.urlBase}/${id}`);
  }

  //Create client
  public createClient(client:Client):Observable<Client>{
    return this.httpClient.post<Client>(`${this.urlBase}/register`,client);
  }
}

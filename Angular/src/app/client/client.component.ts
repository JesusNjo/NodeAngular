import { Component, OnInit, inject } from '@angular/core';
import { Client } from '../model/client.model';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  clientList?:Client[];
  public clientService = inject(ClientService);


  ngOnInit(): void {
    this.clientService.findAllClient().subscribe(clients=>{
      this.clientList = clients
    })
  }
}

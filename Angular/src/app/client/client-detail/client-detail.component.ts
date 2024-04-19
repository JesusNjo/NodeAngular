import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/model/client.model';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit{

  client?:Client;
  private router = inject(ActivatedRoute);
  private clientService= inject(ClientService);

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const clientId = params['id'];
      this.clientService.findClientById(clientId).subscribe({
        next: (client: Client) => {
          this.client = client;
        },
        error: (error) => {
          console.error('Error fetching client:', error);
        }
      });
    });
  }
}

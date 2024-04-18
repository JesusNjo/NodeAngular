import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private register: ClientService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    console.log(this.form.value);
    
  }

  enviar(){
    if(this.form.valid){
      const client:Client = this.form.value;

      this.register.createClient(client).subscribe({
        next:(clientCreated:Client)=>{
          alert(`Welcome ${clientCreated.name}`);
        }
      })
    }
  }
}
 
  

import { Component, OnInit } from '@angular/core';
import { ClientService } from '../service/client.service';
import { FormBuilder, FormGroup, MinValidator, ValidatorFn, Validators } from '@angular/forms';
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
      name: ['', [Validators.required, this.validatorCharacter(), Validators.minLength(5)]],
      lastName: ['', [Validators.required, this.validatorCharacter()]],
      email: ['', [Validators.required,Validators.email, this.validatorEmailCom()]]
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
    }else{
      alert('All field are required');
    }
  }

  hasError(type:string,error:string){
    return this.form.get(type)?.hasError(error) && this.form.get(type)?.touched;
  }

  validatorEmailCom():ValidatorFn{
    return (control)=>{
      const value = control.value as string;
     return !value.includes('.com')? {'isInvalidEmail':true}:null;
    }
  }

  validatorCharacter():ValidatorFn{
    return (control)=>{
      const value = control.value as string;
      const regex = /^(?=.*[a-z])(?=.*[A-Z])/;
      if(!regex.test(value)){
        return {'invalidName':true}
      }
      return null;
    }
  }
}
 
  

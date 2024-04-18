import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ClientComponent } from './client/client.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path :'', component:HomeComponent},
  {path: 'product', component:ProductComponent},
  {path: 'product/:id', component:ProductDetailComponent},
  {path: 'client', component:ClientComponent},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

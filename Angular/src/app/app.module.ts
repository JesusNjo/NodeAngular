import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ClientComponent } from './client/client.component';
import { RegisterComponent } from './register/register.component';
import { ProductGridComponent } from './product/product-grid/product-grid.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ModifyProductComponent } from './modify-product/modify-product.component';
import { ModifyClientComponent } from './client/modify-client/modify-client.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    ClientComponent,
    RegisterComponent,
    ProductGridComponent,
    ProductListComponent,
    ModifyProductComponent,
    ModifyClientComponent,
    ClientDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

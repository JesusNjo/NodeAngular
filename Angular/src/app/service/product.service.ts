import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlBase:string = "http://localhost:3000/product";
  private httpClient = inject(HttpClient);
  constructor() { }

  //Get all products

  public findAllProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.urlBase);
  }
  //Find product by id
  public findProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.urlBase}/${id}`);
  }


  //Create product
  public createProduct(product:Product):Observable<Product>{
    return this.httpClient.post<Product>(`${this.httpClient}/register`,product);
  }
}

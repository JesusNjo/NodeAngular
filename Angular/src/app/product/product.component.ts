import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { Injectable, inject } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList?:Product[];
  private productService= inject(ProductService);

  ngOnInit(): void {
    this.productService.findAllProduct().subscribe(products=>{
      this.productList = products;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { Injectable, inject } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList?:Product[];
  private productService= inject(ProductService);
  private router = inject(Router);

  ngOnInit(): void {
    this.productService.findAllProduct().subscribe(products=>{
      this.productList = products;
    })
  }
  goToList() {
    // Verificar si ya estamos en la ruta de lista de productos
    if (this.router.url.includes('/product')) {
      // Si ya estamos en la ruta de lista de productos, simplemente refresca la vista actual
      this.router.navigateByUrl('/product', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/product']);
      });
    } else {
      // Si no estamos en la ruta de lista de productos, navega a la ruta de lista de productos
      this.router.navigate(['/product']);
    }
  }

}

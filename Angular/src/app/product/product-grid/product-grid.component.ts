import { Component, OnInit, inject } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  productList?:Product|any;
  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.findAllProduct().subscribe({
      next: (products:Product[])=>{
        this.productList=products;
      }
    })
  }
}

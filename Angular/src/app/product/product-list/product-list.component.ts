import { Component, inject } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList?:Product[];
  private productService= inject(ProductService);

  ngOnInit(): void {
    this.productService.findAllProduct().subscribe(products=>{
      this.productList = products;
    })
  }
 
}

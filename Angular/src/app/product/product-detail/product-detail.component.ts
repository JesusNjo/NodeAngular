import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../model/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?:Product
  private router = inject(ActivatedRoute);
  private productService= inject(ProductService);
  loading:boolean=true;
  ngOnInit(): void {
    setTimeout(() => {
      this.router.params.subscribe(params=>{
        this.productService.findProductById(Number(params['id'])).subscribe(product=>{
          this.product = product;
          console.log(product);
          this.loading = false;
        })
      })
    }, 1000);
  }
}

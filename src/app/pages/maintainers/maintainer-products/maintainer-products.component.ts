import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-maintainer-products',
  templateUrl: './maintainer-products.component.html',
  styleUrls: ['./maintainer-products.component.scss'],
})
export class MaintainerProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }
}

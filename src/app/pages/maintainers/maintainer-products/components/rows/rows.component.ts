import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../interfaces/product.interface';
import { ProductService } from '../../../../../services/product.service';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.scss'],
})
export class RowsComponent implements OnInit {
  @Input('products')
  public products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  eliminarProducto(productId: string) {
    this.productService.deleteProduct(productId).subscribe((data) => {
      console.log('Se ha eliminado el producto');
    });
  }
}

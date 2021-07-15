import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['./card-products.component.scss'],
})
export class CardProductsComponent implements OnInit {
  constructor() {}

  @Input() product: Product;

  ngOnInit(): void {}
}

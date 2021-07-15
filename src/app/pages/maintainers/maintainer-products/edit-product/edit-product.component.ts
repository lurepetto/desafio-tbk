import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  constructor() {}

  @Input() product: Product;

  ngOnInit(): void {}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CardProductsComponent } from './components/card-products/card-products.component';
import { DetailProductsComponent } from './detail-products/detail-products.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListProductsComponent,
    CardProductsComponent,
    DetailProductsComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, RouterModule],
})
export class ProductsModule {}

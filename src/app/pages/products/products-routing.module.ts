import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { DetailProductsComponent } from './detail-products/detail-products.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list-products', component: ListProductsComponent },
      { path: 'detail-products', component: DetailProductsComponent },
    ],
  },
  { path: '**', component: ListProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

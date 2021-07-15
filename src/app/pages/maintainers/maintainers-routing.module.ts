import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintainerProductsComponent } from './maintainer-products/maintainer-products.component';
import { MaintainerUsersComponent } from './maintainer-users/maintainer-users.component';
import { EditUserComponent } from './maintainer-users/components/edit-user/edit-user.component';
import { EditProductComponent } from './maintainer-products/edit-product/edit-product.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'products', component: MaintainerProductsComponent },
      { path: 'users', component: MaintainerUsersComponent },
      { path: 'users/edit', component: EditUserComponent },
      { path: 'products/edit', component: EditProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaintainersRoutingModule {}

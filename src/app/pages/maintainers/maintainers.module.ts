import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintainerProductsComponent } from './maintainer-products/maintainer-products.component';
import { MaintainerUsersComponent } from './maintainer-users/maintainer-users.component';
import { MaintainersRoutingModule } from './maintainers-routing.module';
import { RowsComponent } from './maintainer-products/components/rows/rows.component';
import { RowsUserComponent } from './maintainer-users/components/rows/rows.component';
import { RouterModule } from '@angular/router';
import { EditUserComponent } from './maintainer-users/components/edit-user/edit-user.component';
import { EditProductComponent } from './maintainer-products/edit-product/edit-product.component';

@NgModule({
  // Importacion de componentes
  declarations: [
    MaintainerProductsComponent,
    MaintainerUsersComponent,
    RowsComponent,
    RowsUserComponent,
    EditUserComponent,
    EditProductComponent,
  ],
  imports: [CommonModule, MaintainersRoutingModule, RouterModule],
})
export class MaintainersModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { MaintainersModule } from './maintainers/maintainers.module';

// Importar reactformmodule para la creacion de forms
@NgModule({
  declarations: [],
  imports: [CommonModule, ProductsModule, MaintainersModule],
})
export class PagesModule {}

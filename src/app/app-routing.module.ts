import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Definicion de rutas
const routes: Routes = [
  { path: '', redirectTo: 'products/list-products', pathMatch: 'full' },
  // redireccion de componentes
  {
    path: 'products',
    loadChildren: () =>
      import('src/app/pages/products/products.module').then(
        (module) => module.ProductsModule
      ),
  },
  // redireccion de modulos
  {
    path: 'maintainers',
    loadChildren: () =>
      import('src/app/pages/maintainers/maintainers.module').then(
        (module) => module.MaintainersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

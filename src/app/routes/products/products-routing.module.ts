import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsProductListComponent } from './product-list/product-list.component';
import { ProductsProductListDialogProductComponent } from './product-list/dialog-product/dialog-product.component';

const routes: Routes = [{ path: 'product-list', component: ProductsProductListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

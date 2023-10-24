import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsProductListComponent } from './product-list/product-list.component';
import { ProductsProductListDialogProductComponent } from './product-list/dialog-product/dialog-product.component';

const COMPONENTS: any[] = [ProductsProductListComponent, ProductsProductListDialogProductComponent];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ]
})
export class ProductsModule { }

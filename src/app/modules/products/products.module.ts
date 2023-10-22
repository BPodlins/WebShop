import { NgModule } from '@angular/core';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './components/products/product/product.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ImagesCarouselComponent } from './components/products/product-details/images-carousel/images-carousel.component';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, ProductDetailsComponent, ImagesCarouselComponent],
  imports: [SharedModule, ProductsRoutingModule],
})
export class ProductsModule {}

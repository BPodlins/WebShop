import { Component, Input } from '@angular/core';
import { PrimitiveProduct } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: PrimitiveProduct;

  getProductDetailsUrl() {
    return `/products/${this.product.name}-${this.product.createAt.replaceAll(
      '-',
      '',
    )}`;
  }
}

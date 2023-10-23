import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BasketProduct } from '../../../core/models/basket.module';
import { BasketService } from '../../../core/services/basket.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-basket-product',
  templateUrl: './basket-product.component.html',
  styleUrls: ['./basket-product.component.scss'],
})
export class BasketProductComponent {
  @Input() basketProduct!: BasketProduct;
  @Input() basketView = true;
  @Output() deleteProductUuid = new EventEmitter<string>();

  constructor(
    private basketService: BasketService,
    private notifierService: NotifierService,
  ) {}

  deleteProductFromBasket() {
    this.basketService
      .deleteProductFromBasket(this.basketProduct.uuid)
      .subscribe({
        next: () => {
          this.notifierService.notify(
            'success',
            'Correctly deleted products from basket.',
          );
          this.deleteProductUuid.emit(this.basketProduct.uuid);
        },
        error: (err) => {
          this.notifierService.notify(
            'warning',
            'Didnt manage to delete the product from the basket, try again.',
          );
        },
      });
  }
}

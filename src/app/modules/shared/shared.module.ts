import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './components/alert/alert.component';
import { QuantityControlComponent } from './controles/quantity-control/quantity-control.component';
import { InputOnlyNumberDirective } from './directives/input-only-number.directive';
import { PhoneControlComponent } from './controles/phone-control/phone-control.component';
import { BasketProductComponent } from './components/basket-product/basket-product.component';

@NgModule({
  declarations: [
    AlertComponent,
    QuantityControlComponent,
    InputOnlyNumberDirective,
    PhoneControlComponent,
    BasketProductComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AlertComponent,
    BasketProductComponent,
    QuantityControlComponent,
    PhoneControlComponent,
  ],
})
export class SharedModule {}

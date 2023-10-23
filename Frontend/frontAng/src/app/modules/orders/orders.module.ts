import { NgModule } from '@angular/core';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderComponent } from './components/order/order.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OrdersComponent, OrderComponent],
  imports: [SharedModule, OrdersRoutingModule],
})
export class OrdersModule {}

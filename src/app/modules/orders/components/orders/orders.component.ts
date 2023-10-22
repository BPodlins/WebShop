import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../../core/services/orders.service';
import { GetOrdersResponse } from '../../../core/models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: GetOrdersResponse[] = [];
  errorMsg: null | string = null;

  constructor(
    private ordersService: OrdersService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe({
      next: (orders) => {
        this.orders = [...orders];
      },
      error: (err) => {
        this.errorMsg = err;
      },
    });
  }

  navigateToDetails(uuid: string) {
    this.router.navigate(['orders', uuid]);
  }
}

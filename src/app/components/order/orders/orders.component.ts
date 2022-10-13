import { Component, OnInit } from '@angular/core';
import { Order } from './../../../models/order.model';
import { OrderService } from './../../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders:Order[] = []
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService
      .getOrders()
      .subscribe((orders: Order[]) => this.orders = orders);
  }
}

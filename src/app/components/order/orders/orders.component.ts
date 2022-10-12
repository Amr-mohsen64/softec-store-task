import { Component, OnInit } from '@angular/core';
import { Order } from './../../../models/order.model';
import { OrderService } from './../../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService
      .getOrders()
      .subscribe((orders: Order[]) => console.log(orders));
  }
}

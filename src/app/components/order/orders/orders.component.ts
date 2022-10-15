import { DataStorageService } from './../../../services/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { Order } from './../../../models/order.model';
import { OrderService } from './../../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];
  constructor(
    private orderService: OrderService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    // this.orderService.fetchOrders().subscribe((orders: Order[]) => {
    //   this.orders = orders;
    //   console.log(this.orders);
    // });

    this.orderService.ordersChanged.subscribe(
      (orders) => (this.orders = orders)
    );
    this.orders = this.orderService.getOrderss();
  }
}

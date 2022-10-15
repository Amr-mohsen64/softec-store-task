import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { Order } from '../models/order.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class OrdersResolverService implements Resolve<Order[]> {
  constructor(private orderService: OrderService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Order[] | Observable<Order[]> | Promise<Order[]> {
    const orders = this.orderService.getOrderss();
    if (orders.length === 0) {
      return this.orderService.fetchOrders();
    } else {
      return orders;
    }
  }
}

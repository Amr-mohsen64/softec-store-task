import { DataStorageService } from './data-storage.service';
import { Product } from './../models/product.model';
import { Order } from './../models/order.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map, Observable, pipe, Subject, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  productsUrl = environment.productsUrl;
  users = new BehaviorSubject<User[]>([]);
  orders: Order[] = [];
  ordersChanged: Subject<Order[]> = new Subject<Order[]>();

  constructor(
    private http: HttpClient,
    private dataStorageService: DataStorageService
  ) {}

  fetchOrders(): Observable<Order[]> {
    return this.dataStorageService.getOrders().pipe(
      tap((orders) => {
        this.orders = orders;
        // this.ordersChanged.next(orders);
      })
    );
  }

  getOrderss() {
    return this.orders;
  }

  getUsers() {
    this.dataStorageService
      .fetchUsers()
      .subscribe((users) => this.users.next(users));
  }

  // getOrder(orderId: number) {
  //   return this.dataStorageService.getOrders().pipe(
  //     map((orders) => {
  //       return orders.find((order) => order.OrderId == orderId);
  //     })
  //   );
  // }

  getOrder(orderId: number) {
    return this.orders.find((order) => order.OrderId == orderId);
  }

  getUser(id: string) {
    return this.dataStorageService.fetchUsers().pipe(
      map((users) => {
        return users.find((user: User) => user.Id == id);
      })
    );
  }

  getOrderProduct(productId: number) {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map((products: Product[]) => {
        return products.find((product) => product.ProductId === productId);
      })
    );
  }

  addOrder(order: Order) {
    this.orders.unshift(order);
    this.ordersChanged.next(this.orders);
  }
}

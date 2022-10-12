import { Order } from './../models/order.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  ordersUrl = environment.ordersUrl;
  usersUrl = environment.productsUrl;
  users = new BehaviorSubject<User[]>([]);

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUsers() {
    this.fetchUsers().subscribe((users) => this.users.next(users));
  }

  getOrder(orderId: number) {
    return this.getOrders().pipe(
      map((orders) => {
        return orders.find((order) => order.OrderId == orderId);
      })
    );
  }

  getUser(id: string) {
    return this.fetchUsers().pipe(
      map((users) => {
        return users.find((user) => user.Id == id);
      })
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';
import { User } from '../models/user.model';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  productsUrl = environment.productsUrl;
  ordersUrl = environment.ordersUrl;
  usersUrl = environment.usersUrl;
  
  constructor(
    private http: HttpClient,
    private productsService: ProductService
  ) {}

  fetchProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.productsUrl)
      .pipe(tap((products) => this.productsService.setProducts(products)));
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
  
}

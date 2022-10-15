import { User } from 'src/app/models/user.model';
import { Component, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  totalPrice: number = 0;
  users: User[] = [];
  selectedUserId!: string;
  paymentType: string = 'cash';

  constructor(
    public activeOffcanvas: NgbActiveOffcanvas,
    private cartService: CartService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.cartService.cartProductsChanged.subscribe(
      (products) => (this.cartProducts = products)
    );
    this.cartProducts = this.cartService.cartProducts;
    this.cartService.cartTotalPrice.subscribe(
      (price) => (this.totalPrice = price)
    );
    this.orderService.getUsers();
    this.orderService.users.subscribe((users) => {
      this.users = users;
      this.selectedUserId = this.users[0]?.Id;
    });
    console.log(this.totalPrice);
  }

  onUsersChange(userId: string) {
    this.selectedUserId = userId;
  }

  onAddOrder() {
    const newOrder: Order = {
      Products: this.cartProducts,
      OrderId: Math.ceil(Math.random() * (10000 - 1000) + 1000),
      UserId: this.selectedUserId,
      OrderDate: new Date().toString(),
      PaymentType: this.paymentType,
    };

    console.log(newOrder);
    this.emptyCart();
  }

  emptyCart() {
    this.cartService.productsCount.next(0);
    this.cartProducts = [];
    this.cartService.cartProducts = [];
  }
}

import { User } from 'src/app/models/user.model';
import { Component, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order.model';
import { Router } from '@angular/router';
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
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cartProductsChanged.subscribe((products) => {
      this.cartProducts = products;
    });
    this.cartProducts = this.cartService.cartProducts;

    this.orderService.getUsers();
    this.orderService.users.subscribe((users) => {
      this.users = users;
      this.selectedUserId = this.users[0]?.Id;
    });
    this.setCartTotalPrice();
  }

  setCartTotalPrice() {
    this.totalPrice = this.cartService.totalPrice;
    this.cartService.cartTotalPriceChanged.subscribe((price) => {
      this.totalPrice = +price;
    });
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
      totalPrice: this.totalPrice,
    };

    this.orderService.addOrder(newOrder);
    this.emptyCart();

    setTimeout(() => {
      this.router.navigate(['/orders']);
      this.activeOffcanvas.close();
    }, 400);
  }

  emptyCart() {
    this.cartProducts = [];
    this.cartService.clearCart();
  }
}

import { Component, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: Product[] = [];
  totalPrice: number = 0;

  constructor(
    public activeOffcanvas: NgbActiveOffcanvas,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.cartProductsChanged.subscribe(
      (products) => (this.cartProducts = products)
    );
    this.cartProducts = this.cartService.cartProducts;
    this.cartService.cartTotalPrice.subscribe(
      (price) => (this.totalPrice = price)
    );
    console.log(this.totalPrice);
  }
}

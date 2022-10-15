import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartProducts: Product[] = [];
  cartProductsChanged = new Subject<Product[]>();
  productsCount = new Subject<number>();
  cartTotalPriceChanged = new Subject<number>();
  totalPrice = 0;
  constructor() {}

  addProductToCart(product: Product) {
    this.cartProducts.push(product);
    this.cartProductsChanged.next(this.cartProducts.slice());
    this.productsCount.next(this.cartProducts.slice().length);
    this.setTotalPrice();
  }

  getCartProducts() {
    return this.cartProducts.slice();
  }

  setTotalPrice() {
    let price = 0;
    this.cartProducts.map((product) => {
      return (price += product.ProductPrice * product.Quantity);
    });
    this.cartTotalPriceChanged.next(price);
    this.totalPrice = price;
  }

  clearCart() {
    this.cartProducts = [];
    this.cartProductsChanged.next([]);
    this.productsCount.next(0);
  }
}

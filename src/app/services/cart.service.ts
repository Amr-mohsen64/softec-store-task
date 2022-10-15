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
  cartTotalPrice = new Subject<number>();

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
    this.cartProducts.forEach((product) => {
      return (price += product.ProductPrice);
    });

    this.cartTotalPrice.next(price);
  }

  clearCart() {
    this.cartProducts = [];
    this.cartProductsChanged.next([]);
    this.productsCount.next(0);
  }
}

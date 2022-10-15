import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsUrl = environment.productsUrl;
  productChanged = new Subject<Product[]>();
  private products: Product[] = [];

  constructor() {}

  setProducts(products: Product[]) {
    this.products = products;
    this.productChanged.next(this.products.slice());
  }

  getProducts() {
    return this.products.slice();
  }

  updateProduct(newQuantity: number, productId: number) {
    const product = this.products.find(
      (product) => product.ProductId == productId
    );
    product!.AvailablePieces = +newQuantity;
  }

  getProduct(productId: number) {
    return this.getProducts().find(
      (product) => product.ProductId === productId
    );
  }
}

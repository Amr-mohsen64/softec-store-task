import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productsUrl = environment.productsUrl;
  productChanged = new Subject<Product[]>();
  private products: Product[] = [];

  constructor(private http: HttpClient) {}

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.productsUrl);
  // }

  setProducts(products: Product[]) {
    this.products = products;
    this.productChanged.next(this.products.slice());
  }

  getProducts() {
    console.log(this.products);
    return this.products.slice();
  }

  updateProduct(newQuantity: number, productId: number) {
    const product = this.products.find(
      (product) => product.ProductId == productId
    );
    product!.AvailablePieces = +newQuantity;
    console.log(product);
  }
}

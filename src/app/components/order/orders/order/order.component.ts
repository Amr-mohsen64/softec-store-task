import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { Order } from './../../../../models/order.model';
import { User } from './../../../../models/user.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Input() order: Order | null = null;
  user: User | undefined = undefined;
  totalPrice: number | undefined;

  constructor(
    private orderService: OrderService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getUser(this.order?.UserId);
    this.calculateOrderTotalPrice();
  }

  getUser(id: any) {
    this.orderService.getUsers();
    this.orderService.getUser(id).subscribe((u) => {
      this.user = u;
    });
  }

  getProduct(productId: number) {
    return this.productService.getProduct(productId);
  }

  calculateOrderTotalPrice() {
    let price = 0;
    this.order?.Products?.map((product) => {
      let foundedProduct = this.getProduct(product.ProductId);
      return (price += foundedProduct!.ProductPrice * product!.Quantity);
    });
    this!.order!.totalPrice = price;
  }
}

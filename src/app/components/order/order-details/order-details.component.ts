import { Product } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  order: Order | undefined = undefined;
  id: number = 0;
  products: Product[] = [];
  user: User | undefined = undefined;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.order = this.orderService.getOrder(this.id);
      this.order?.Products?.map((product) => {
        this.orderService.getOrderProduct(product.ProductId).subscribe((p) => {
          this.products.push({ ...(p as Product), ...product });
        });
      });
      this.getUser(this.order!.UserId as string);
    });
  }

  getUser(id: string) {
    this.orderService.getUser(id).subscribe((u) => (this.user = u));
  }
}

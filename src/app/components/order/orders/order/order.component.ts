import { User } from './../../../../models/user.model';
import { OrderService } from 'src/app/services/order.service';
import { Order } from './../../../../models/order.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Input() order: Order | null = null;
  user: User | undefined = undefined;
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getUser(this.order?.UserId);
  }

  getUser(id: any) {
    this.orderService.getUsers();
    this.orderService.getUser(id).subscribe((u) => {
      this.user = u;
    });
  }
}

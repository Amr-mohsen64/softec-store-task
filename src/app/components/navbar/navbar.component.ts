import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './../cart/cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCollabsed: boolean = true;
  cartCount: number = 0;

  constructor(
    private offcanvasService: NgbOffcanvas,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.productsCount.subscribe(
      (count) => (this.cartCount = count)
    );
  }

  openCart() {
    this.offcanvasService.open(CartComponent, {
      position: 'end',
    });
  }
}

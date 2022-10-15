import { CartComponent } from './../cart/cart.component';
import { Component, OnInit } from '@angular/core';
import { NgbActiveOffcanvas, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isCollabsed: boolean = true;
  constructor(private offcanvasService: NgbOffcanvas) {}

  ngOnInit(): void {}

  openCart() {
    const offcanvasRef = this.offcanvasService.open(CartComponent, {
      position: 'end',
    });
    offcanvasRef.componentInstance.name = 'World';
  }
}

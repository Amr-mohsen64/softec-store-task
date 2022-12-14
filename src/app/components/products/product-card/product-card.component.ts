import { Component, Input, OnInit } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { CartComponent } from '../../cart/cart.component';
import { Product } from './../../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product | null = null;
  isEdit: boolean = false;
  editQuantityMode: boolean = false;

  constructor(
    private productsService: ProductService,
    private cartService: CartService,
    private offcanvasService: NgbOffcanvas
  ) {}

  ngOnInit(): void {
    this.setIsEdit();
  }

  setIsEdit() {
    this.isEdit = this.product!.AvailablePieces < 5 ? true : false;
  }

  onEditProductQuantity() {
    this.editQuantityMode = true;
  }

  onUpdateProductQuantity(quantity: any, productId: number) {
    this.editQuantityMode = false;
    this.productsService.updateProduct(quantity, productId);
  }

  onAddToCart() {
    this.cartService.addProductToCart({
      ...(this.product as Product),
      Quantity: 1,
    });
    this.openCart();

    setTimeout(() => {
      this.closeCart();
    }, 700);
  }

  openCart() {
    this.offcanvasService.open(CartComponent, {
      position: 'end',
    });
  }

  closeCart() {
    this.offcanvasService.dismiss();
  }
}

import { Component, Input, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {
    this.setIsEdit();
  }

  setIsEdit() {
    this.isEdit = this.product!.AvailablePieces < 5 ? true : false;
  }

  onEditProductQuantity() {
    this.editQuantityMode = true;
  }

  onUpdateProductQuantity(quantity: any) {
    this.product!.AvailablePieces = quantity;
    this.editQuantityMode = false;
  }

  onAddToCart() {
    console.log(this.product);
  }
}

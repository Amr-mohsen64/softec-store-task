import { Product } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit-modal',
  templateUrl: './product-edit-modal.component.html',
  styleUrls: ['./product-edit-modal.component.scss']
})
export class ProductEditModalComponent implements OnInit {
  product!:Product
  constructor() { }

  ngOnInit(): void {
    // this.product.ProductName = 'amr'
    console.log(this.product);
  }

}

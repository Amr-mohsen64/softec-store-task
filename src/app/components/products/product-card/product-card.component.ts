import { ProductEditModalComponent } from './../product-edit-modal/product-edit-modal.component';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from './../../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product | null = null;
  isEdit: boolean = false;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.setIsEdit();
  }

  setIsEdit() {
    this.isEdit = this.product!.AvailablePieces < 5 ? true : false;
  }

  onEditProduct() {
    const editPopUp = this.modalService.open(ProductEditModalComponent, {
      centered: true,
      size: 'xl',
    });
    editPopUp.componentInstance.product = this.product;
  }
}

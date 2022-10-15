import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolverService implements Resolve<Product[]> {
  constructor(private dataStorageService: DataStorageService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Product[] | Observable<Product[]> | Promise<Product[]> {
    return this.dataStorageService.fetchProducts();
  }
}

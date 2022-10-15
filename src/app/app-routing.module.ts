import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderDetailsComponent } from './components/order/order-details/order-details.component';
import { OrdersComponent } from './components/order/orders/orders.component';
import { ProductsComponent } from './components/products/products/products.component';
import { OrdersResolverService } from './services/orders-resolver.service';
import { ProductsResolverService } from './services/products-resolver.service';

const appRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    pathMatch: 'full',
    resolve: [ProductsResolverService],
  },
  {
    path: 'orders',
    component: OrdersComponent,
    resolve: [OrdersResolverService],
  },
  {
    path: 'orders/:id',
    component: OrderDetailsComponent,
    resolve: [OrdersResolverService],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

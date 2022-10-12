import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderDetailsComponent } from './components/order/order-details/order-details.component';
import { OrdersComponent } from './components/order/orders/orders.component';
import { ProductsComponent } from './components/products/products/products.component';

const appRoutes: Routes = [
  { path: '', component: ProductsComponent, pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/:id', component: OrderDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

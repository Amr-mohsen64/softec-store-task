import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductsComponent } from './components/products/products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductCardComponent,
    ProductsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

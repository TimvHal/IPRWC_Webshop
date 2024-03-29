import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { BodyModule } from './main/body/body.module';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { AuthComponent } from './auth/auth.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BackgroundComponent } from './background/background.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from './shopping-cart/cart-item/cart-item.component';
import { OrderComponent } from './order-page/order/order.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ProductComponent } from './admin-panel/product/product.component';
import { AddProductComponent } from './admin-panel/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    OrderPageComponent,
    AuthComponent,
    ShoppingCartComponent,
    BackgroundComponent,
    DetailsComponent,
    CartItemComponent,
    OrderComponent,
    AdminPanelComponent,
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BodyModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

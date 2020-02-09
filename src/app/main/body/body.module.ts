import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BodyComponent } from './body.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { ProductsComponent } from './products/products.component';
import { SearchbarComponent } from './products/searchbar/searchbar.component';
import { CarComponent } from './products/car/car.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BodyComponent,
    SlideShowComponent,
    ProductsComponent,
    SearchbarComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [BodyComponent],
  providers: [],
  bootstrap: [BodyComponent]
})
export class BodyModule { }

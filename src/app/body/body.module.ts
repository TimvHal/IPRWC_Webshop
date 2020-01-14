import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BodyComponent } from './body.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { ProductsComponent } from './products/products.component';
import { SearchbarComponent } from './products/searchbar/searchbar.component';
import { CarsComponent } from './products/cars/cars.component';

@NgModule({
  declarations: [
    BodyComponent,
    SlideShowComponent,
    ProductsComponent,
    SearchbarComponent,
    CarsComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [BodyComponent],
  providers: [],
  bootstrap: [BodyComponent]
})
export class BodyModule { }

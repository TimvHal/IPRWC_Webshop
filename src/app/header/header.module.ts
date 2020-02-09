import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [HeaderComponent],
  providers: [],
  bootstrap: [HeaderComponent]
})
export class HeaderModule { }

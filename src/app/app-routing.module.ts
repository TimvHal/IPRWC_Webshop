import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthComponent } from './auth/auth.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  { path:'', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'orders', component: OrderPageComponent },
  { path: 'shoppingcart', component: ShoppingCartComponent },
  { path: 'details', children: [
    { path: ':id', component: DetailsComponent }
  ]},
  {path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthComponent } from './auth/auth.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminGuard } from './auth/admin.guard';


const routes: Routes = [
  { path:'', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'details', children: [
    { path: ':id', component: DetailsComponent }
  ]},
  { path: 'orders', component: OrderPageComponent, canActivate:[AuthGuard] },
  { path: 'shoppingcart', component: ShoppingCartComponent, canActivate:[AuthGuard] },
  { path: 'adminpanel', component: AdminPanelComponent, canActivate:[AdminGuard] },
  { path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { CartItem } from 'src/app/models/cart-item.model'

@Injectable({providedIn: 'root'})

export class CartItemService {
    cartItems: CartItem[];

    constructor(private httpService:HttpService) {}

    public getCartItems(completed) {
        this.httpService.get('shoppingcart')
        .pipe(map(response => {
            return <CartItem[]> response;
        }))
        .subscribe(completed);
    }

    public postCartItem(articleId: String, completed) {
        this.httpService.post('shoppingcart/' + articleId, null)
        .pipe(map(response => {
            return <boolean> response;
        }))
        .subscribe(completed);
    }

    public deleteCartItem(cartItemId:String) {
        this.httpService.delete('shoppingcart/' + cartItemId)
        .subscribe(data => {
            console.log(data.toString());
        });
    }
}
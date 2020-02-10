import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { Order } from 'src/app/models/order.model';

@Injectable({providedIn: 'root'})

export class OrderService {
    orders: Order[];

    constructor(private httpService:HttpService) {}

    public getOrders(completed) {
        this.httpService.get('order')
        .pipe(map(response => {
            return <Order[]> response;
        }))
        .subscribe(completed);
    }

    public postOrder(articleId: String, completed) {
        this.httpService.post('order/' + articleId, null)
        .pipe(map(response => {
            return <boolean> response;
        }))
        .subscribe(completed);
    }

}
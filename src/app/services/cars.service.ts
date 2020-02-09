import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpService } from './http.service';
import { Car } from '../models/car.model'

@Injectable({providedIn: 'root'})

export class CarService {
    cars: Car[];

    constructor(private httpService:HttpService) {}

    public getCars(completed) {
        this.httpService.get('car')
        .pipe(map(response => {
            return <Car[]> response;
        }))
        .subscribe(completed);
    }

    public getCar(completed, id: String) {
        this.httpService.get('car/' + id)
        .pipe(map(response => {
            return <Car[]> response;
        }))
        .subscribe(completed)
    } 

    public postCar(car:Car) {
        this.httpService.post('car', car)
        .subscribe(data => {
            console.log(data.toString());
        })
    }

    public putCar(car:Car) {
        this.httpService.put('car/' + car.articleId, car)
        .subscribe(data => {
            console.log(data.toString());
        })
    }

    public deleteCar(articleId:String) {
        this.httpService.delete('car/' + articleId)
        .subscribe(data => {
            console.log(data.toString());
        });
    }
}
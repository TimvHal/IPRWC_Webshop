import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cars: Car[] 

  constructor(
    private carService:CarService
  ) { }

  ngOnInit() {
    this.cars = [];
    this.getCars();
  }

  getCars() {
    this.carService.getCars(cars => {
      for(let car of cars) {
        if(car.isSold == false) {
          this.cars.push(car);
        }
      }
    })
  }

}

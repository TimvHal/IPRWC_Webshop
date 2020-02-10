import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car.model';
import { CarService } from '../services/cars.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  cars: Car[] 
  message: String;
  emptyCars: boolean;

  constructor(
    private carService:CarService
  ) { }

  ngOnInit() {
    this.message = '';
    this.emptyCars = true;
    this.cars = [];
    this.getCars();
  }

  getCars() {
    this.carService.getCars(cars => {
      if(cars.length == 0) {
        this.message = 'There is no cars available. Add some!';
        this.emptyCars = true;
      }
      else {
        for(let car of cars) {
          if(car.isSold == false) {
            this.cars.push(car);
          }
        }
        this.emptyCars = false;
      }
    })
  }

  deleteCar(articleId: String) {
    this.carService.deleteCar(articleId);
    this.cars.forEach((car, index) => {
      if(car.articleId == articleId) {
        this.cars.splice(index, 1);
      }
      if(this.cars.length == 0) {
        this.message = 'There is no cars available. Add some!';
        this.emptyCars = true;
      }
    })
  }

}

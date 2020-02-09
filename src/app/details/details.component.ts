import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/cars.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  selectedCar: Car;
  carId: String;

  constructor(private carService: CarService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.carId = params['id'];
        }
      );
    this.getCar(this.carId);
  }

  getCar(id:String) {
    this.carService.getCars(cars => {
      for(let car of cars) {
        if(car.articleId == id) {
          this.selectedCar = car;
        }
      }
    });
  }

  getStatus() {
    return this.selectedCar.status.toLowerCase();
  }

  getDate() {
    var dateList = this.selectedCar.dateAdded.split('-');
    return dateList[2] + '-' + dateList[1] + '-' + dateList[0]
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/models/car.model'
import { CarService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car: Car;

  constructor(
    public carService:CarService
  ) { }

  ngOnInit() {
  }

}

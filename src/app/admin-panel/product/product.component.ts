import { Component, OnInit, Input } from '@angular/core';
import { Car } from 'src/app/models/car.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() car: Car;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  isLoading: boolean = false;

  constructor(
    private carService: CarService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    const car = new Car(null, form.value.brand, form.value.model, form.value.description, form.value.price, form.value.engine,
                form.value.power, form.value.model_year, 'USED', false, null, form.value.image_url);
    this.carService.postCar(car);
    form.reset();
    this.isLoading = false;
  }

}

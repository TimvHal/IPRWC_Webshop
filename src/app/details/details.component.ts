import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/cars.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Car } from '../models/car.model';
import { AuthService } from '../services/auth.service';
import { CartItemService } from '../services/cart-item.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  selectedCar: Car;
  carId: String;
  message: String;

  constructor(private carService: CarService,
              private cartItemService: CartItemService,
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.message = '';
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

  addToCart() {
    var success = false;
    if(!this.authService.isLoggedIn()) {
      this.router.navigate(['/auth']);
      return;
    }
    this.cartItemService.postCartItem(this.carId, response => {
      if(response) {
        this.message = 'Success!';
        return;
      }
      this.message = 'This is already in your cart.';
    });
  }

}

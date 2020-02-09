import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { RegisterForm } from '../models/register-form.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isLoginMode = true;
  isLoading = false;
  error: string = null;
  wrongPasswordBool: boolean = true;
 
  constructor(private userService: UserService,
    private authService: AuthService,
    private router: Router) { }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    if (this.isLoginMode) {
      //Login
      this.authService.login(email, password, () => {
        this.router.navigate(['/main'])
      }, error => {
        this.error = 'The email and password you entered did not match our records. Please double-check and try again.';
      });
    } else {
      //Register
      const name = form.value.name;
      const confirmPassword = form.value.confirm_password;

      if (password === confirmPassword) {
        this.wrongPasswordBool =true;
        const registerForm = new RegisterForm(email, name, password)
        this.userService.register(registerForm, () => {
          //On succes
          this.onSwitchMode()
        });
      }else{
        this.wrongPasswordBool= false;
      }
    }

    form.reset();
    this.isLoading = false;
  }

}

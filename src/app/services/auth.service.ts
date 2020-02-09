import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { UserService } from "./user.service";
import { map, tap } from "rxjs/operators";
import { User } from "../models/user.model";
import { Router } from "@angular/router";

@Injectable({ providedIn: "root" })
export class AuthService {
  public user: User;
  public token: string;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private userService: UserService,
  ) {}

  public login(
    email: string,
    password: string,
    success?: () => void,
    error?: (error: any) => void
  ): void {
    this.httpService.headers = this.httpService.headers.set(
      "Authorization",
      "Basic " + btoa(email + ":" + password)
    );

    this.getToken(
      token => {
        this.validateToken(token, success, error);
      },
      err => {
        this.clearAuth();
        if (error) error(err);
      }
    );
  }

  get authenticated(): boolean {
    return this.user ? true : false;
  }

  private validateToken(
    token: string,
    success?: () => void,
    error?: (error: any) => void
  ) {
    this.httpService.headers = this.httpService.headers.set(
      "Authorization",
      "Bearer " + token
    );

    this.userService.getSelf(
      user => {
        this.token = token;
        this.user = user;
        this.localStoreAuthData(token);
      },
      err => {
        this.clearAuth();
        if (error) error(err);
      },
      success
    );
  }

  private localStoreAuthData(token: string) {
    localStorage.setItem("token", JSON.stringify(token));
  }

  public autoLogin() {
    const loadedToken = JSON.parse(localStorage.getItem("token"));
    if (!loadedToken) {
      return;
    }
    this.validateToken(
      loadedToken,
      () => {
        this.token = loadedToken;
        this.getUserFromDatabase();
        this.router.navigate(["main"]);
      },
      err => {
      }
    );
  }

  private getUserFromDatabase() {
    this.httpService.get("user").pipe(
      tap((receivedData: User) => {}),
      map((receivedData: User) => {
        this.user = new User(
          receivedData.email,
          receivedData.name,
          receivedData.password
        );
      })
    );
  }

  public clearAuth() {
    this.user = null;
    this.token = null;
    this.httpService.headers = this.httpService.headers.delete("Authorization");
    localStorage.removeItem("token");
  }

  public isLoggedIn(): boolean {
    return this.user != null;
  }

  public getToken(
    next?: (value: any) => void,
    error?: (error: any) => void,
    complete?: () => void
  ) {
    this.httpService
      .get("user/token")
      .pipe(
        map(response => {
          let loginResponse = <{ token: string }>response;
          return loginResponse.token;
        })
      )
      .subscribe(next, error, complete);
  }
  
}

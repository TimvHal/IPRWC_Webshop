import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({providedIn: 'root'})

export class HttpService {

    public baseUrl: string = "http://www.furayn.nl/api/";
    public headers: HttpHeaders = new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        // "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    });

    constructor(private http:HttpClient) {}

    public get(url:string) {
        return this.http.get(this.baseUrl + url, {headers:this.headers});
    }

    public post(url:string, body:any) {
        return this.http.post(this.baseUrl + url, body, {headers:this.headers});
    }

    public put(url:string, body:any) {
        return this.http.put(this.baseUrl + url, body, {headers:this.headers});
    }

    public delete(url:string) {
        return this.http.delete(this.baseUrl + url, {headers:this.headers});
    }

}

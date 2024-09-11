import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {


  constructor(private http: HttpClient) {}


  postWithoutBearer(url:string,body:any){
    const headers = new HttpHeaders({
    });
    return this.http.post<any>(url, body,{ headers }).pipe(
      map((response: any) => response) // Extract the body here
    );
  }

  postWithBearer(url:string,body:any){
    const tokenObject = localStorage.getItem("jwtToken");
    let tokenString = "";
    if(tokenObject){
      const jsonObject = JSON.parse(tokenObject);
      tokenString = jsonObject.token;
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenString}`
    });
    return this.http.post<any>(url, body,{ headers }).pipe(
      map((response: any) => response) // Extract the body here
    );
  }



  getWithBearer(url: string) {

    const tokenObject = localStorage.getItem("jwtToken");
    let tokenString = "";
    if(tokenObject){
        const jsonObject = JSON.parse(tokenObject);
        tokenString = jsonObject.token;
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenString}`
    });

    return this.http.get<any>(url, { headers }).pipe(
      map((response: any) => response) // Extract the body here
    );
  }




}

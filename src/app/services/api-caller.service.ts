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




}

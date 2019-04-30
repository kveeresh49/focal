import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http:HttpClient) { }


  getOrderDetails() {
    return this.http.get('')
  }

  getProductListDetails() {
    return this.http.get('')
  }
}

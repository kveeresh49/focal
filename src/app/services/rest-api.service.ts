import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productlistJson } from '../products/product-list/product-list';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  public xyz = productlistJson;
  public spinnerValueSubject = new BehaviorSubject(1000);

  public spinnerValue :number = 80;
  baseUrl = './orders.json'
  constructor(private http: HttpClient) { }


  
  getOrderDetails() {
      return this.http.get('assets/dummydata/orders.json');
  }

  getProductListDetails() {
    return this.http.get('assets/dummydata/productList.json')
  }

  getAddressOrderList(){
    return this.http.get('assets/dummydata/address.ordersList.json')
  }


}


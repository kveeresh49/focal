import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonProductService {

  public addCartSubject = new BehaviorSubject(1);
  public addCartItems = [];

  constructor() { }

  

  priceClaculation(event,items) {
    items.netPrice =  (items.quantity * items.tridePrice) - (items.quantity * items.tridePrice*(10/100));
    items.savings = (items.quantity * items.tridePrice ) - items.netPrice;
  }

  savingCalculation(productJson) {
    productJson.map((data) => {
      // console.log(data);
      if(data.quantity) {
       data.netPrice =  (data.quantity * data.tridePrice) - (data.quantity * data.tridePrice*(10/100));
       data.savings = (data.quantity * data.tridePrice ) - data.netPrice;
      }
     })

  }

  getTotalCalculation() {
    if(this.addCartItems.length !==0) {
      let netPrice = 0;
      this.addCartItems.forEach((data) => {
        netPrice = netPrice + data.netPrice;
      });
      console.log(netPrice);
  }
}

}

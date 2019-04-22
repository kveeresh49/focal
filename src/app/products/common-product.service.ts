import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonProductService {

  public addCartSubject = new Subject<any>();
  public addCartItems = [];

  constructor() { }

  priceClaculation(event,items) {
    items.netprice =  (items.quantity * items.trideprice) - (items.quantity * items.trideprice*(10/100));
    items.savings = (items.quantity * items.trideprice ) - items.netprice;
  }

  savingCalculation(productJson) {
    productJson.map((data) => {
      // console.log(data);
      if(data.quantity) {
       data.netprice =  (data.quantity * data.trideprice) - (data.quantity * data.trideprice*(10/100));
       data.savings = (data.quantity * data.trideprice ) - data.netprice;
      }
     })

  }

  getTotalCalculation() {
    if(this.addCartItems.length !==0) {
      let netPrice = 0;
      this.addCartItems.forEach((data) => {
        netPrice = netPrice + data.netprice;
      });
      console.log(netPrice);
  }
}

}

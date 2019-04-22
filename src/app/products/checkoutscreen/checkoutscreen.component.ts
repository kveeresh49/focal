import { Component, OnInit } from '@angular/core';
import { CommonProductService } from '../common-product.service';



@Component({
  templateUrl: './checkoutscreen.component.html',
  styleUrls: ['./checkoutscreen.component.css']
})
export class CheckoutscreenComponent implements OnInit {

  public productJson:any;

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];
  product: boolean;
  promotions: boolean;
  Discount: boolean;
  PAYMENT: boolean;

  constructor(private commonProductService:CommonProductService){
    this.productJson = this.commonProductService.addCartItems;
  }

  ngOnInit() {

    debugger;
    console.log(this.commonProductService.addCartItems);
    if(this.commonProductService.addCartSubject !== undefined) {
      this.commonProductService.addCartSubject.subscribe((items) => {
        console.log(items,'items');
      });
    }
  }

  removeItems(items,i){
    console.log(items);
    this.productJson.splice(i,1);
    console.log(this.productJson)
  }

  OrderDetails(item){
    switch(item){
      case 'product': {
          this.product = true;
          this.promotions = false;
          this.Discount = false;
          this.PAYMENT = false;
          break;

      }
      case 'promotions': {
        this.product = false;
        this.promotions = true;
        this.Discount = false;
        this.PAYMENT = false;
        break;
    }
    case 'Discount': {
      this.product = false;
      this.promotions = false;
      this.Discount = true;
      this.PAYMENT = false;
      break;

  }
  case 'PAYMENT': {
    this.product = false;
    this.promotions = false;
    this.Discount = false;
    this.PAYMENT = true;
    break;

}

    }
  }

  onChange(event,items){
    console.log(items);
    this.commonProductService.priceClaculation(event,items);
    
  }

  totalCalculations() {
    this.commonProductService.getTotalCalculation();
  }

 }
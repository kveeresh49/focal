import { Component, OnInit } from '@angular/core';
import { CommonProductService } from '../common-product.service';
import { addressJson } from '../product-list/product-list';



@Component({
  templateUrl: './checkoutscreen.component.html',
  styleUrls: ['./checkoutscreen.component.css']
})
export class CheckoutscreenComponent implements OnInit {

  public productJson:any;
  public addressJson = addressJson;

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];
  public breadcrum = [
    'REVIEW ORDER',
    'WHOLESALER',
    'ADDRESS',
    'PAYMENT'

  ]
  product: boolean;
  promotions: boolean;
  Discount: boolean;
  PAYMENT: boolean;
  selectedTab: any;
  tridePrice: number;
  savings: number;
  total: number;

  constructor(private commonProductService:CommonProductService){
    
  }

  ngOnInit() {
    this.productJson = this.commonProductService.addCartItems;
    this.selectedTab = this.breadcrum[0];
    console.log(this.commonProductService.addCartItems);
    this.getTotalPriceCalculation();
  }

  removeItems(items,i){
    console.log(items);
    this.productJson.splice(i,1);
    console.log(this.productJson)
  }

  onChange(event,items){
    this.commonProductService.priceClaculation(event,items);
    this.getTotalPriceCalculation();
  }

  totalCalculations() {
    this.commonProductService.getTotalCalculation();
  }

  selectTabClick(index) {

    switch(index) {

      case 0: {
        this.selectedTab = this.breadcrum[index];
        break;
      }
      case 1: {
        this.selectedTab = this.breadcrum[index];
        break;
      }
      case 2: {
        this.selectedTab = this.breadcrum[index];
        break;
      }
      case 3: {
        this.selectedTab = this.breadcrum[index];
        break;
      }
    }

  }


  getNavigationMethod(tab){

    this.breadcrum.forEach((data,index) => {

      if(data === tab) {
        this.selectTabClick(index+1);
      }
    });

  }

  getTotalPriceCalculation() {
    this.tridePrice = 0;
    this.savings = 0;
    this.commonProductService.addCartItems.forEach((data) => {
      this.tridePrice =  this.tridePrice + (data.quantity * data.trideprice);
      this.savings = this.savings + ((data.quantity * data.trideprice ) - data.netprice);
    });
    this.total =  this.tridePrice - this.savings;

  }

 }
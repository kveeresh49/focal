import { Component, OnInit } from '@angular/core';
import { CommonProductService } from '../common-product.service';
@Component({
  templateUrl: './checkoutscreen.component.html',
  styleUrls: ['./checkoutscreen.component.css']
})
export class CheckoutscreenComponent implements OnInit {

  public productJson:any;


  constructor(private commonProductService:CommonProductService){
    this.productJson = this.commonProductService.addCartItems;
  }

  ngOnInit() {

    console.log(this.productJson);

    if(this.commonProductService.addCartSubject !== undefined) {
      this.commonProductService.addCartSubject.subscribe((items) => {
        console.log(items);
      });
    }
    
    



  }


 }
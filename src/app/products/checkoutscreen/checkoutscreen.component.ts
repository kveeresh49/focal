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

  constructor(private commonProductService:CommonProductService){
    this.productJson = this.commonProductService.addCartItems;
  }

  ngOnInit() {

    console.log(this.productJson);

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

 }
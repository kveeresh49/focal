import { Component, OnInit } from '@angular/core';
import { CommonProductService } from '../common-product.service';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  templateUrl: './checkoutscreen.component.html',
  styleUrls: ['./checkoutscreen.component.css']
})
export class CheckoutscreenComponent implements OnInit {

  public productJson:any;

  displayedColumns: string[] = ['item', 'cost'];
    transactions: Transaction[] = [
      {item: 'Beach ball', cost: 4},
      {item: 'Towel', cost: 5},
      {item: 'Frisbee', cost: 2},
      {item: 'Sunscreen', cost: 4},
      {item: 'Cooler', cost: 25},
      {item: 'Swim suit', cost: 15},
    ];

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

  
    
  
    /** Gets the total cost of all transactions. */
    getTotalCost() {
      return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }

 }
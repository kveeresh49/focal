import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';
import { productlistJson } from './product-list';
import { CommonProductService } from '../common-product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public searchKey: any;
  public productJson = [];
  public quantity: any;
  public searchText: any;
  public selectedTab: any;
  public isDisabled = true;
  

  constructor(public commonProductService: CommonProductService, private route: Router) {
    this.productJson = productlistJson.slice();
  }

  ngOnInit() {
    // this.productJson.quantity = this.quantity;
    this.selectedTab = 'product';
    this.getCalculation();
    this.getData();
  }

  addCart(items, index) {
    console.log(items);

    const filteredItems = this.commonProductService.addCartItems.filter((a) => (a.productName === items.productName));

    if(filteredItems.length === 0) {
      this.commonProductService.addCartItems.push(items);
    } else {
      this.commonProductService.addCartItems.forEach((data) => {
        if(data.productName === items.productName){
             data.quantity = items.quantity;
        }

      });
    }
    
    // this.commonProductService.addCartSubject.next(items);
    console.log(this.commonProductService.addCartItems);
    alert( `${this.commonProductService.addCartItems.length} no of Items Added in Cart`);
    this.commonProductService.addCartSubject.next(1);

  }

  clickme() {
    this.route.navigate(['./products/checkout']);
  }
  onChange(event, items) {
    console.log(items);
    this.commonProductService.priceClaculation(event, items);
  }


  getCalculation() {

    if (this.productJson.length !== 0) {
      this.commonProductService.savingCalculation(this.productJson);
    }
  }

  getData() {
    this.commonProductService.addCartSubject.subscribe((data)=>{
      console.log(this.commonProductService.addCartItems.length);
    })
  }


  // Menu Navigation Click - Heilighting menus

  navigationClick(navigationText){
    this.selectedTab = navigationText;
   
  }


}

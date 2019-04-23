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
    this.selectedTab = 'Product';
    this.getCalculation();
  }

  addCart(items, index) {
    console.log(items);
    this.commonProductService.addCartItems.push(items);
    // this.commonProductService.addCartSubject.next(items);
    console.log(items, index);
    alert( `${this.commonProductService.addCartItems.length} no of Items Added in Cart`)

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


}

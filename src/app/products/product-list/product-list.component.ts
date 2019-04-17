import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material';
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
public quantity:any;
public searchText:any;
  constructor(public commonProductService:CommonProductService,private route:Router) { 
    this.productJson = productlistJson.slice();
  }

  ngOnInit() {
   // this.productJson.quantity = this.quantity;
  }

  addCart(items,index){
    this.commonProductService.addCartItems.push(items);
    this.commonProductService.addCartSubject.next(items);
    console.log(items,index);

  }

  clickme(){
    this.route.navigate(['./products/checkout']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonProductService } from '../common-product.service';
import { productlistJson,orderJson } from '../product-list/product-list';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  isLinear = false;
  newDate = new Date();
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  productJson =  orderJson;
  selectedTab: string;


  constructor(private commonProductService: CommonProductService, private _formBuilder: FormBuilder,private toastr: ToastrService) {
   // this.productJson = this.commonProductService.addCartItems;
  }

  ngOnInit() {
    this.selectedTab = 'allorders' ;
  }

  reOrder(items,index) {
    console.log(items ,index);
    const filteredItems = this.commonProductService.addCartItems.filter((a) => (a.productName === items.productName));

    if(filteredItems.length === 0) {
      this.commonProductService.addCartItems.push(...items);
    } else {
      items.forEach(element => {
        this.commonProductService.addCartItems.forEach((data) => {
          if(data.productName === element.productName){
               data.quantity = element.quantity;
          }
        });
      });
     
    }
    // this.commonProductService.addCartSubject.next(items);
    console.log(this.commonProductService.addCartItems);
    this.toastr.success( `${this.commonProductService.addCartItems.length} no of Items Added in Cart`);
    this.commonProductService.addCartSubject.next(1);


  }

}




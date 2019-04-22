import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonProductService } from '../common-product.service';
import { productlistJson,orderJson } from '../product-list/product-list';

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


  constructor(private commonProductService: CommonProductService, private _formBuilder: FormBuilder) {
   // this.productJson = this.commonProductService.addCartItems;
  }

  ngOnInit() {
    this.selectedTab = 'allorders' ;
    //  this.firstFormGroup = this._formBuilder.group({
    //  firstCtrl: ['', Validators.required]
    //  });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }

}




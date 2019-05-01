import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonProductService } from '../common-product.service';
import { productlistJson,orderJson } from '../product-list/product-list';
import { ToastrService } from 'ngx-toastr';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  isLinear = false;
  newDate = new Date();
  productJson : any;
  selectedTab: string;


  constructor(private commonProductService: CommonProductService, private fb: FormBuilder,
              private toastr: ToastrService, private restApi: RestApiService) {
  }

  ngOnInit() {
    this.selectedTab = 'allorders' ;
    this.getDetails();
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


  // Api call getting the Data from Server  -- Order Details

  getDetails() {
    this.restApi.getOrderDetails().subscribe(data => {
      this.productJson = data;
    });

  }

}




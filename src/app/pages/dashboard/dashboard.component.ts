import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/components/base.component';
import { LanguageService } from 'src/app/services/language.service';
import { LanguageChangeObserver } from 'src/app/util/language-change.observer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  constructor(
    private router: Router,
    languageService: LanguageService,
    languageChangeObserver: LanguageChangeObserver
  ) {
    super(languageService, languageChangeObserver);
  }
  images = [1, 2, 3].map(
    () => `https://picsum.photos/900/500?random&t=${Math.random()}`
  );
  orderData = [
    {
      orderID: 1589635,
      date: '01 Apr 2019',
      Orderval: '$104',
      orders: 15,
      status: 'shipped'
    },
    {
      orderID: 1589635,
      date: '01 Apr 2019',
      Orderval: '$134',
      orders: 5,
      status: 'Delivered'
    }
  ];
  ngOnInit() {
    super.ngOnInit();
    this.setUserLanguage();
  }
}
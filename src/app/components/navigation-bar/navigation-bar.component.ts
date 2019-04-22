import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseComponent } from "../base.component";
import { LanguageService } from "src/app/services/language.service";
import { LanguageChangeObserver } from "src/app/util/language-change.observer";
import { CommonProductService } from 'src/app/products/common-product.service';

@Component({
  selector: "app-navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.css"]
})
export class NavigationBarComponent extends BaseComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  myvalue: number;

  constructor(
    private breakpointObserver: BreakpointObserver,
    languageService: LanguageService,
    languageChangeObserver: LanguageChangeObserver,
    private commonProductService:CommonProductService
  ) {
    super(languageService, languageChangeObserver);
  }

  logout() {
    sessionStorage.removeItem("currentUser");
  }

  ngOnInit() {
    
    this.setUserLanguage();
    this.myvalue = this.commonProductService.addCartItems.length;
    console.log(this.commonProductService.addCartItems.length);
  }
}

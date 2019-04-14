import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BaseComponent } from "../base.component";
import { LanguageService } from "src/app/services/language.service";
import { LanguageChangeObserver } from "src/app/util/language-change.observer";

@Component({
  selector: "app-side-navigation-bar",
  templateUrl: "./side-navigation-bar.component.html",
  styleUrls: ["./side-navigation-bar.component.css"]
})
export class SideNavigationBarComponent extends BaseComponent
  implements OnInit {
  path = "/dashboard";
  showSideNav: Boolean = true;
  sideNavClass: String = "side-nav-container";

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    languageService: LanguageService,
    languageChangeObserver: LanguageChangeObserver
  ) {
    super(languageService, languageChangeObserver);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  ngOnInit() {}

  loadSimpleRules(type: String) {
    console.log("Navigating to dashboard");
    this.router.navigate(["./rules/" + type]);
  }
}

import { Component, OnInit, ElementRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseComponent } from "src/app/components/base.component";
import { LanguageService } from "src/app/services/language.service";
import { LanguageChangeObserver } from "src/app/util/language-change.observer";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent extends BaseComponent implements OnInit {
  constructor(
    private router: Router,
    languageService: LanguageService,
    languageChangeObserver: LanguageChangeObserver
  ) {
    super(languageService, languageChangeObserver);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setUserLanguage();
  }
}

import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "../base.component";
import { LanguageService } from "src/app/services/language.service";
import { LanguageChangeObserver } from "src/app/util/language-change.observer";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent extends BaseComponent implements OnInit {
  constructor(
    languageService: LanguageService,
    languageChangeObserver: LanguageChangeObserver
  ) {
    super(languageService, languageChangeObserver);
  }

  ngOnInit() {}
}

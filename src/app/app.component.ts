import { Component } from '@angular/core';
import { BaseComponent } from './components/base.component';
import { LanguageService } from './services/language.service';
import { LanguageChangeObserver } from './util/language-change.observer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {
  title = 'iop-web';

  constructor(
    languageService: LanguageService,
    languageChangeObserver: LanguageChangeObserver
  ) {
    super(languageService, languageChangeObserver);
  }

}
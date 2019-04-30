import { OnInit } from "@angular/core";
import { AuthenticationUtility } from '../services/auth.utility';
import { LanguageService } from '../services/language.service';
import { LanguageChangeObserver } from '../util/language-change.observer';

export class BaseComponent implements OnInit {
  
  language: any;
  constructor(
    protected languageService: LanguageService,
    protected languageChangeObserver: LanguageChangeObserver
  ) {}

  isAuthenticated(): boolean {
    return true;
    // return AuthenticationUtility.isAuthenticated();
  }

  ngOnInit(): void {
    if (this.isAuthenticated()) {
    }
  }

  setUserLanguage() {
    this.language = JSON.parse(localStorage.getItem("language"));
  }

  setLanguage(language: any) {
    this.language = language;
  }

  loadLanguage(code: string) {
    this.languageService
      .getLanguageProperties(code)
      .subscribe((language: any) => {
        console.log("Language properties file loaded: ", language);
        if (language) {
          localStorage.setItem("language", JSON.stringify(language));
          this.setUserLanguage();
          console.log(this.language.labels);
          //location.reload();
          this.languageChangeObserver.doSomething(true);
        }
      });
  }
}

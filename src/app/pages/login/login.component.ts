import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/components/base.component';
import { LanguageService } from 'src/app/services/language.service';
import { LanguageChangeObserver } from 'src/app/util/language-change.observer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {
  username = '';
  password = '';
  processing = false;
  loginButtonLabel = 'Login';
  error = {
    username: '',
    password: ''
  };

  constructor(
    private router: Router,
    languageService: LanguageService,
    languageChangeObserver: LanguageChangeObserver
  ) {
    super(languageService, languageChangeObserver);
  }

  ngOnInit() {}

  login() {
    console.log('Logging in User......');
    const currentUser = {
      jwtToken: 'xyz'
    };
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    this.setInitialLanguage('en');
    this.navigateToDashboard();
  }

  setInitialLanguage(code: string) {
    this.languageService
      .getLanguageProperties(code)
      .subscribe((language: any) => {
        console.log('Language properties file loaded: ', language);
        if (language) {
          localStorage.setItem('language', JSON.stringify(language));
          this.setUserLanguage();
          console.log(this.language.labels);
          this.navigateToDashboard();

          this.languageChangeObserver.doSomething(true);
        }
      });
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
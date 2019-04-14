import { Component, Inject, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { debug } from 'util';

@Injectable({
    providedIn: 'root',
})
export class LanguageService {

    data: any = {};
    constructor(private http: HttpClient) { }

    debugger;
    public getLanguageProperties(code: string): Observable<any> {
        // this.use(code);
        debugger;
        return this.http.get('./assets/properties/' + code + '.json').
            pipe(
                tap((data) => console.log(`${data}`)),
                catchError(this.handleError('Getting crm dimensions')));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

    use(lang: string): Promise<{}> {
        return new Promise<{}>((resolve, reject) => {
          const langPath = `assets/i18n/${lang || 'en'}.json`;
          this.http.get<{}>(langPath).subscribe(
            translation => {
              this.data = Object.assign({}, translation || {});
              resolve(this.data);
            },
            error => {
              this.data = {};
              resolve(this.data);
            }
          );
        });
      }
}

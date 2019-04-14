import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonProductService {

  public addCartSubject = new Subject<any>();
  public addCartItems = [];

  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { HttpConfigInterceptor } from '../products.interceptor';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  

  public spinnerValue:any =  100;
  color = 'primary';
  mode = 'determinate';
  value = 50;

  constructor(private restApi: RestApiService) {
   
  }

  ngOnInit() {

    this.restApi.spinnerValueSubject.subscribe((data) => {
      
      this.spinnerValue = data;
    })

  }

}

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { routingComponents, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialAppModule } from './ngmaterial.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SideNavigationBarComponent } from './components/side-navigation-bar/side-navigation-bar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FilterPipe } from './products/product-list/filter.pipe';
import { CheckoutscreenComponent } from './products/checkoutscreen/checkoutscreen.component';
import { OrdersComponent } from './products/orders/orders.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ToastrModule } from 'ngx-toastr';
import { HttpConfigInterceptor } from './services/products.interceptor';
import { SpinnerComponent } from './services/spinner/spinner.component';

import { WorkModuleModule } from './work-module/work-module.module';
//import { ListViewModule } from '@syncfusion/ej2-angular-lists';

// import { TreeViewModule } from '@syncfusion/ej2-angular-lists';

 //import { TreeViewModule  } from '@syncfusion/ej2-angular-navigations';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    SideNavigationBarComponent,
    routingComponents,
    ProductListComponent,
    FilterPipe,
    CheckoutscreenComponent,
    OrdersComponent,
    SpinnerComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    WorkModuleModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // TreeViewModule,
    FormsModule,
    LayoutModule,
    MaterialAppModule,
    NgxPaginationModule,
    MatStepperModule,
    ToastrModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

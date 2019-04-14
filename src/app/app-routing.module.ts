import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ProductListComponent } from './products/product-list/product-list.component';
import { CheckoutscreenComponent } from './products/checkoutscreen/checkoutscreen.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  {path:'products',children:[
    {path:'products-list',component:ProductListComponent},
    {path:'checkout',component:CheckoutscreenComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  LoginComponent,
  FooterComponent,
  DashboardComponent
];

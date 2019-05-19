import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiraialViewComponent } from './hiraial-view/hiraial-view.component';
import { RouterModule } from '@angular/router';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { BrowserModule } from '@angular/platform-browser';
import { StructuralviewComponent } from './structuralview/structuralview.component';
import {MatCardModule} from '@angular/material/card';
const routs = [{
  path: 'tree', component: HiraialViewComponent
}]

@NgModule({
  declarations: [HiraialViewComponent, StructuralviewComponent],
  imports: [
    CommonModule,
    TreeViewModule,
    MatCardModule,
    BrowserModule,
    RouterModule.forChild(routs),
  ]
})
export class WorkModuleModule { }

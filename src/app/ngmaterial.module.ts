import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatRadioModule,
  MatSelectModule,
  MatChipsModule,
  MatMenuModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatTabsModule
} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CdkTreeModule } from '@angular/cdk/tree';

@NgModule({
  imports: [
    MatTabsModule,
    MatListModule,
    MatSliderModule,
    MatTableModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatChipsModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    CdkTreeModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatTabsModule,
    MatListModule,
    MatSliderModule,
    MatTableModule,
    MatDividerModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatChipsModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    CdkTreeModule,
    MatProgressSpinnerModule,
  ]
})
export class MaterialAppModule { }

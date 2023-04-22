import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
// import { LayoutModule } from "@angular/cdk/layout";
// import { MatTableModule } from "@angular/material/table";
// import { MatNativeDateModule } from "@angular/material/core";
// import { MatCheckboxModule } from "@angular/material/checkbox";
// import { MatBadgeModule } from "@angular/material/badge";
// import { MatTabsModule } from "@angular/material/tabs";
// import { DragDropModule } from "@angular/cdk/drag-drop";
// import { MatPaginatorModule } from "@angular/material/paginator";
// import { MatStepperModule } from "@angular/material/stepper";
// import { ClipboardModule } from "@angular/cdk/clipboard";
// import { MatButtonToggleModule } from "@angular/material/button-toggle";

const Material = [
  MatSelectModule,
  MatToolbarModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatIconModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatCardModule,
];

@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}

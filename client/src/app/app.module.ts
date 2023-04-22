import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Reactive Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/shared/material/material.module';

// Routing
import { RoutingModule } from '../app/shared/routing/routing.module';

// Component
import { AppComponent } from './app.component';
import { RealEstateNewComponent } from './layouts/real-estate-new/real-estate-new.component';
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { HistoryOperationsComponent } from './layouts/history-operations/history-operations.component';



@NgModule({
  declarations: [AppComponent, RealEstateNewComponent,   HistoryOperationsComponent,   ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {};

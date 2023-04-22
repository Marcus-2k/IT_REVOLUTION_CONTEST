import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../app/shared/material/material.module';

// Routing
import { RoutingModule } from '../app/shared/routing/routing.module';

import { AppComponent } from './app.component';
import { RealEstateNewComponent } from './layouts/real-estate-new/real-estate-new.component';

@NgModule({
  declarations: [AppComponent,  RealEstateNewComponent],
  imports: [BrowserModule, RoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../app/shared/material/material.module';

// Routing
import { RoutingModule } from '../app/shared/routing/routing.module';

import { AppComponent } from './app.component';
import { RealEstateComponent } from './layouts/real-estate/real-estate.component';
import { RealEstateNewComponent } from './layouts/real-estate-new/real-estate-new.component';

@NgModule({
  declarations: [AppComponent, RealEstateComponent, RealEstateNewComponent],
  imports: [BrowserModule, RoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

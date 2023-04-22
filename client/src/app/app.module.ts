import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HistoryOperationsComponent } from './layouts/history-operations/history-operations.component';

// Auth Layouts
import { LoginComponent } from './layouts/auth/login/login.component';
import { RegisterComponent } from './layouts/auth/register/register.component';
import { TokenInterceptor } from './shared/classes/token.interseptor';
import { HeaderComponent } from './layouts/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RealEstateNewComponent,
    HistoryOperationsComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, multi: true, useClass: TokenInterceptor },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

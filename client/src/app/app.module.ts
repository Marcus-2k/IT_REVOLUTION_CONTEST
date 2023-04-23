import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Reactive Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Service, Pipe, Guard, Token, Class, Resolver, Routing
import { TokenInterceptor } from './shared/classes/token.interseptor';
import { RoutingModule } from '../app/shared/routing/routing.module';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/shared/material/material.module';

// Auth Layouts
import { LoginComponent } from './layouts/auth/login/login.component';
import { RegisterComponent } from './layouts/auth/register/register.component';

// 404
import { NotFoundComponent } from './not-found/not-found.component';

// Components
import { AppComponent } from './app.component';
import { RealEstateNewComponent } from './layouts/real-estate-new/real-estate-new.component';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HistoryOperationsComponent } from './layouts/history-operations/history-operations.component';
import { ApartmentsCardsComponent } from './layouts/apartments-cards/apartments-cards.component';
import { HeaderComponent } from './layouts/components/header/header.component';
import { HomeComponent } from './layouts/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RealEstateNewComponent,
    HistoryOperationsComponent,
    LoginComponent,
    RegisterComponent,
    ApartmentsCardsComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
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

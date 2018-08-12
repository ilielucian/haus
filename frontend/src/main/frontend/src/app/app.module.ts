import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RentalCardComponent } from './dashboard/rental-card/rental-card.component';
import { CardContainerComponent } from './dashboard/card-container/card-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './common/header/header.component';
import {RentalsService} from './services/rentals.service';

@NgModule({
  declarations: [
    AppComponent,
    RentalCardComponent,
    CardContainerComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    RentalsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GridElement } from './directives/grid.element.component';
import { RentalCardComponent } from './dashboard/rental-card/rental-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GridElement,
    RentalCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

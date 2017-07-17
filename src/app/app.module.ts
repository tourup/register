import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material';

import { AddressComponent } from './address.component';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CallService } from './call.service';
import { RegisterComponent } from './register.component';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { MaterializeModule } from 'ng2-materialize';
import { PageNotFoundComponent } from './not-found.component'
import { BankComponent } from './bank.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AddressComponent,
    PageNotFoundComponent,
    BankComponent
  ],
  imports: [
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterializeModule.forRoot()
  ],
  exports: [
    MdCardModule,
    MdButtonModule,
    MdInputModule
],
  providers: [ CallService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

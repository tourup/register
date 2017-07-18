import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdInputModule, MdToolbarModule, MdIconModule} from '@angular/material';
import 'hammerjs';

import { AddressComponent } from './address.component';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CallService } from './call.service';
import { RegisterComponent } from './register.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './not-found.component';
import { BankComponent } from './bank.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AddressComponent,
    PageNotFoundComponent,
    BankComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdToolbarModule,
    MdIconModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [ CallService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

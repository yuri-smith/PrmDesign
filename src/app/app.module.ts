import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';

import {
  ToolbarModule,
  ButtonModule,
  SplitButtonModule,
  MenuModule,
  MenuItem,
  InputTextModule,
  DropdownModule,
  AutoCompleteModule,
  InputTextareaModule
} from 'primeng/primeng';

import { CardModule } from 'primeng/card';


/* import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import {SelectItem} from 'primeng/components/common/api';
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DimModule } from './dim/dim.module';
import { CurrencyModule } from './currency/currency.module';
import { CountryModule } from './country/country.module';
import { CityModule } from './city/city.module';
import { CompanyModule } from './company/company.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    // HttpClientModule,
    MenuModule,
    // MenuItem,
    DimModule,
    CurrencyModule,
    CountryModule,
    CityModule,
    CompanyModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

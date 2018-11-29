import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// import { DimService } from './services/dim.service';
// import { CurrencyService } from './services/currency.service'
// import { CityService } from './services/city.service'
// import { CountryService } from './services/country.service'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    // DimService,
    // CurrencyService,
    // CityService,
    // CountryService,
  ]
})
export class SharedModule { }

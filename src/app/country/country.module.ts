import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  DataTableModule,
  SharedModule as PrimengSharedModule,
  ButtonModule,
  DialogModule,
  InputTextModule,
  DropdownModule,
  AutoCompleteModule,
  InputTextareaModule
} from 'primeng/primeng';

import { SharedModule, Country, Currency, CountryService, CurrencyService } from '../shared';
import { CountriesComponent } from '../country/countries.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    PrimengSharedModule,
    ButtonModule,
    DialogModule,
    SharedModule,
    InputTextModule,
    DropdownModule,
    AutoCompleteModule,
    InputTextareaModule
  ],
  declarations: [
    CountriesComponent
  ],
  providers: [
    CountryService,
    CurrencyService
  ]
})
export class CountryModule { }

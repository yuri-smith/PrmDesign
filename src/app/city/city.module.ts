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

import { SharedModule, GlobalService, City, Country, CityService, CountryService } from '../shared';
import { CitiesComponent } from '../city/cities.component';

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
    CitiesComponent
  ],
  providers: [
    CityService,
    CountryService,
    GlobalService
  ]
})
export class CityModule { }

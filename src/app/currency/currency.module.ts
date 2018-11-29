import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  DataTableModule,
  SharedModule as PrimengSharedModule,
  ButtonModule,
  DialogModule
} from 'primeng/primeng';

import { SharedModule, Currency, CurrencyService } from '../shared';
import { CurrenciesComponent } from './currencies.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    PrimengSharedModule,
    ButtonModule,
    DialogModule,
    SharedModule
  ],
  declarations: [
    CurrenciesComponent
  ],
  providers: [
    CurrencyService
  ]
})
export class CurrencyModule { }

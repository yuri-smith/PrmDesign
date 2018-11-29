import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  DataTableModule,
  SharedModule as PrimengSharedModule,
  ButtonModule,
  DialogModule
} from 'primeng/primeng';
import { SharedModule, Dim, DimService } from '../shared';
import { DimsComponent } from './dims.component';

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
    DimsComponent
  ],
  providers: [
    DimService
  ]
})
export class DimModule { }

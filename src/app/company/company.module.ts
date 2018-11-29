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
    InputTextareaModule,
  } from 'primeng/primeng';

import { SharedModule, GlobalService, Company, CompanyService } from '../shared';
import { CompaniesComponent } from '../company/companies.component';

/* import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import {SelectItem} from 'primeng/components/common/api';
 */
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
        InputTextareaModule,
    ],
    declarations: [
        CompaniesComponent
    ],
    providers: [
        CompanyService,
        GlobalService
    ]
})
export class CompanyModule {}

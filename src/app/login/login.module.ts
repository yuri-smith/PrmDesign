import { NgModule } from '@angular/core';
import { CommonModule, PathLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import {
  ButtonModule,
  SharedModule as PrimengSharedModule,
} from 'primeng/primeng';
import {
  CardModule
} from 'primeng/card';
import { LoginComponent } from './login.component';

import { User, LoginService } from '../shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    PrimengSharedModule,
    CardModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DimModule } from './dim/dim.module';
import { AppComponent } from './app.component';
import { DimsComponent } from './dim//dims.component';
import { CurrenciesComponent } from './currency/currencies.component';
import { CountriesComponent } from './country/countries.component';
import { CitiesComponent } from './city/cities.component';
import { CompaniesComponent } from './company/companies.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'dims', component: DimsComponent },
  { path: 'currencies', component: CurrenciesComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'companies', component: CompaniesComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    // DimModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}

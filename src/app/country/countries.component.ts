import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import {
  Country,
  Currency,
  CountryService,
  CurrencyService
} from '../shared';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [
    CountryService,
    CurrencyService
  ]
})

export class CountriesComponent implements OnInit {
  errorMessage: string = '';
  loading: boolean = false;
  displayDialog: boolean;
  headerDialod: string;
  currency: Currency;
  country: Country = new NewObj('');
  selectedCountry: Country;
  isNew: boolean;
  countries: Country[];
  currencies: Currency[];

  constructor(
    private countryService: CountryService,
    private currencyService: CurrencyService
  ) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.getCountries();
      this.loading = false;
    }, 5000);
  }

  getCurrency() {
    this.currencyService.getCurrency(this.country.currencyId).subscribe(
      data => { this.currency = data.body; },
      error => { this.errorMessage = <any>error; }
    );
  }

  getCountries() {
    this.countryService.getCountries().subscribe(
      data => {
        console.log('getCountries()', data);
        this.countries = data.body;
      },
      error => { this.errorMessage = <any>error; }
    );
  }

  getCurrencies() {
    this.currencyService.getCurrencies().subscribe(
      data => {
        this.currencies = data.body;
      },
      error => { this.errorMessage = <any>error; }
    );
  }

  showDialogToAdd() {
    this.headerDialod = 'Новая строка';
    this.isNew = true;
    this.country = new NewObj('');
    this.currency = null;
    this.displayDialog = true;

  }

  save() {
    const countries = [...this.countries];
    this.country.currencyId = this.currency.id;
    if (this.isNew) {
      this.countryService.addCountry(this.country).subscribe(
        data => {
          countries.push(data.body);
          this.countries = [...countries];
        },
        error => {
          console.log(<any>error);
        }
      );
    } else {
      console.log('save_this.country', this.country);
      this.countryService.putCountry(this.country.id, this.country).subscribe(
        data => {
          console.log('put data', data);
        },
        error => {
          console.log('save_put', <any>error);
        }
      );
      console.log('findSelectedItemIndex', this.findSelectedItemIndex());
      countries[this.findSelectedItemIndex()] = this.country;
      this.countries = [...countries];
    }
    this.displayDialog = false;
  }

  delete() {
    this.countryService.deleteCountry(this.selectedCountry.id).subscribe(
      data => {
        console.log('Data', data);
      },
      error => {
        console.log(<any>error);
      }
    );
    const index = this.findSelectedItemIndex();
    this.countries = this.countries.filter((val, i) => i !== index);
    // this.country = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    console.log('event.data', event.data);
    this.headerDialod = 'Текущая строка';
    this.isNew = false;
    this.country = this.cloneObj(event.data);
    this.getCurrency();
    console.log('this.country_onRowSelect', this.country);
    console.log('this.currencies_onRowSelect', this.currencies);

    this.displayDialog = true;
  }

  cloneObj(c: Country): Country {
    const obj = new NewObj('');
    for (const prop in c) {
      if (c !== null) {
        obj[prop] = c[prop];
      }
    }
    return obj;
  }


  findSelectedItemIndex(): number {
    console.log('findSelectedItemIndex_this.selectedCountry', this.selectedCountry);
    return this.countries.indexOf(this.selectedCountry);
  }

}

class NewObj implements Country {
  constructor(public name) {}
}

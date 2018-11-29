import { Component, OnInit } from '@angular/core';
import { Currency, CurrencyService } from '../shared';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css'],
  providers: [ CurrencyService ]
})

export class CurrenciesComponent implements OnInit {
  errorMessage: string = '';
  loading: boolean = false;
  displayDialog: boolean;
  headerDialod: string;
  currency: Currency = new NewObj('');
  selectedCurrency: Currency;
  newCurrency: boolean;
  currencies: Currency[];

  constructor(
    private currencyService: CurrencyService
  ) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.getCurrencies();
      this.loading = false;
    }, 5000);
  }

  getCurrencies() {
    this.currencyService.getCurrencies().subscribe(
      data => {
        console.log('getCurrencies()', data);
        this.currencies = data.body;
      },
      error => { this.errorMessage = <any>error; }
    );
  }

  showDialogToAdd() {
    this.headerDialod = 'Новая строка';
    this.newCurrency = true;
    this.currency = new NewObj('');
    this.displayDialog = true;

  }

  save() {
    const currencies = [...this.currencies];
    if (this.newCurrency) {
      this.currencyService.addCurrency(this.currency).subscribe(
        data => {
          console.log('added data', data);
          currencies.push(data.body);
          this.currencies = [...currencies];
        },
        error => {
          console.log(<any>error);
        }
      );
    } else {
      this.currencyService.putCurrency(this.currency.id, this.currency).subscribe(
        data => {
          console.log('put data', data);
        },
        error => {
          console.log(<any>error);
        }
      );
      currencies[this.findSelectedItemIndex()] = this.currency;
      this.currencies = [...currencies];
    }
    this.currency = null;
    this.displayDialog = false;
  }

  delete() {
    this.currencyService.deleteCurrency(this.selectedCurrency.id).subscribe(
      data => {
        console.log('Data', data);
      },
      error => {
        console.log(<any>error);
      }
    );
    const index = this.findSelectedItemIndex();
    this.currencies = this.currencies.filter((val, i) => i !== index);
    this.currency = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.headerDialod = 'Текущая строка';
    this.newCurrency = false;
    this.currency = this.cloneObj(event.data);
    this.displayDialog = true;
  }

  cloneObj(c: Currency): Currency {
    const obj = new NewObj('');
    for (const prop in c) {
      if (c !== null) {
        obj[prop] = c[prop];
      }
    }
    return obj;
  }


  findSelectedItemIndex(): number {
    return this.currencies.indexOf(this.selectedCurrency);
  }

}

class NewObj implements Currency {
  constructor(public name) {}
}

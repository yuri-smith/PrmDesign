import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';
import {
  City,
  Country,
  CityService,
  CountryService,
  GlobalService
} from '../shared';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  providers: [
    CityService,
    CountryService,
    GlobalService
  ]
})

export class CitiesComponent implements OnInit {
  cities: City[];
  city: City;
  cloneCity: City;
  countries: Country[];
  country: Country;
  // selectedCity: City;

  displayDialog: boolean = false;
  headerDialod: string;
  isLoading: boolean = false;
  isNew: boolean;
  errorMessage: string = '';

  test: string = 'Test';

  constructor(
    private cityService: CityService,
    private countryService: CountryService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.getCities();
      this.isLoading = false;
    }, 5000);
  }

  getCities() {
    this.cityService.getCities().subscribe(
      data => {
        console.log('getCities()', data);
        this.cities = data.body;
      },
      error => { this.errorMessage = <any>error; }
    );
  }

  getCountries() {
    this.countryService.getCountries().subscribe(
      data => { this.countries = data.body; },
      error => { this.errorMessage = <any>error; }
    );
  }

  getCountry() {
    this.countryService.getCountry(this.cloneCity.countryId).subscribe(
      data => {
        // console.log('data', data)
        // console.log('CountryName', data.body.name)
        this.country = data.body;
      },
      error => { this.errorMessage = <any>error; }
    );
  }


  showDialogToAdd() {
    this.headerDialod = 'Новая строка';
    this.isNew = true;
    this.cloneCity = new NewCity('');
    this.displayDialog = true;
  }

  save() {
    const cities = [...this.cities];
    this.cloneCity.countryId = this.country.id;
    if (this.isNew) {
      this.cityService.addCity(this.cloneCity).subscribe(
        data => {
          cities.push(data.body);
          this.cities = [...cities];
        },
        error => {
          console.log(<any>error);
        }
      );
    } else {
      this.cityService.putCity(this.cloneCity.id, this.cloneCity).subscribe(
        data => {
          console.log('put data', data);
        },
        error => {
          console.log('save_put', <any>error);
        }
      );
      cities[this.globalService.getIndex(this.cities, this.city)] = this.cloneCity;
      this.cities = [...cities];
    }
    this.displayDialog = false;
    this.cloneCity = null;
    this.country = null;
  }

  delete() {
    this.cityService.deleteCity(this.city.id).subscribe(
      data => {
        console.log('Data', data);
      },
      error => {
        console.log(<any>error);
      }
    );
    this.cities = this.cities.filter(
      (val, i) => i !== this.globalService.getIndex(this.cities, this.city)
    );
    this.displayDialog = false;
    this.cloneCity = null;
    this.country = null;
  }

  onRowSelect() {
    // console.log("city", this.city);
    // console.log("event.data", event.data);
    this.headerDialod = 'Текущая строка';
    this.isNew = false;
    // this.editableCity = this.cloneCity(this.city);
    this.cloneCity = this.globalService.getClone(this.city, new NewCity(''));
    this.getCountry();
    console.log('onRowSelect_city', this.cloneCity);
    this.displayDialog = true;
  }

/*   cloneCity(c: City): City {
    let obj = new NewCity('');
    for(let prop in c) {
      obj[prop] = c[prop];
    }
    console.log("obj", obj);
    return obj;
  }
 */
/*
  findSelectedItemIndex(): number {
    //return this.cities.indexOf(this.selectedCity);
    return this.cities.indexOf(this.city);
  }
 */
}

class NewCity implements City {
  constructor(public name) {}
}

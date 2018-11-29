import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';

import {
    Company,
    CompanyProfile,
    Address,
    City,
    CompanyService,
    CountryService,
    CityService,
    GlobalService,
    Country
} from '../shared';
import { NumberSymbol } from '@angular/common';

@Component({
    selector: 'app-companies',
    templateUrl: './companies.component.html',
    styleUrls: ['./companies.component.css'],
    providers: [
      CountryService,
      CompanyService,
      CityService,
      GlobalService,
    ]
})
export class CompaniesComponent implements OnInit {
    companies: Company[];
    company: Company;
    cloneCompany: Company;
    countries: Country[];
    country: Country;
    cities: City[];
    city: City;
    displayDialog: Boolean = false;
    headerDialod: String;
    isLoading: Boolean = false;
    isNew: boolean;
    errorMessage: String = '';

    profile: CompanyProfile;
    displayProfile: Boolean = false;
    cloneProfile: CompanyProfile;


    constructor(
        private companyService: CompanyService,
        private countryService: CountryService,
        private cityService: CityService,
        private globalService: GlobalService
    ) { }

    ngOnInit() {
        this.isLoading = true;
        setTimeout(() => {
            this.getCompanies();
            this.isLoading = false;
        }, 5000);
    }

    getCompanies() {
        this.companyService.getCompanies().subscribe(
            data => {
                console.log('getCompanies()', data);
                this.companies = data.body;
            },
            error => { this.errorMessage = <any>error; }
        );
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

    getCompanyProfile() {
        this.companyService.getCompanyProfile(this.cloneCompany.id).subscribe(
            data => {
                console.log('getCompanyProfile()', data);
/*                 this.companyProfile.id = data.body.id
                this.companyProfile.companyId = data.body.companyId
 */
                this.profile = data.body;
/*                 this.companyProfile = {
                    id: data.body.id,
                    companyId: data.body.companyId,
                    legalAddress: {
                        city: {
                            id: data.body.legalAddress.city.id,
                            name: data.body.legalAddress.city.name
                        }
                    },
                    actualAddress: {
                        city: {
                            id: data.body.actualAddress.city.id,
                            name: data.body.actualAddress.city.name
                        }
                    }
                }
 */
            },
            error => { this.errorMessage = <any>error; }
        );
        console.log('companyProfile', this.profile);

    }

    getCountries() {
        this.countryService.getCountries().subscribe(
            data => {
                this.countries = data.body;
            },
            error => { this.errorMessage = <any>error; }
        );
    }

    showDialogToAdd() {
        this.headerDialod = 'Новая строка';
        this.isNew = true;
        this.cloneCompany = new NewCompany('');
        this.displayDialog = true;
    }

    save() {
        console.log('cloneCompany на старте функции save', this.cloneCompany);
        if (!this.isUniqueINN(this.cloneCompany.inn)) {
            console.log('Значение ИНН не уникально!!!');
/*             this.msgs = [];
            this.msgs.push({severity:'error', summary:'Ошибка сохранения', detail:'ИНН не уникальна!'});
 */
            return;
        }

        const companies = [...this.companies];
        if (this.isNew) {
            this.companyService.addCompany(this.cloneCompany).subscribe(
                data => {
                    companies.push(data.body);
                    this.companies = [...companies];
                },
                error => {
                    console.log(<any>error);
                }
            );
        }
        {
            // console.log("cloneCompany перед сохранением обновления", this.cloneCompany);
            this.companyService.putCompany(
                this.cloneCompany.id, this.cloneCompany
            ).subscribe(
                data => {
                    console.log('put data', data);
                },
                error => {
                    console.log('save_put', <any>error);
                }
            );
            companies[this.globalService.getIndex(
                this.companies, this.company
            )] = this.cloneCompany;
            this.companies = [...companies];
        }
        this.displayDialog = false;
        this.cloneCompany = null;
        this.company = null;
    }

    delete() {
        this.companyService.deleteCompany(this.company.id).subscribe(
          data => {
            console.log('Data', data);
          },
          error => {
            console.log(<any>error);
          }
        );
        this.companies = this.companies.filter(
          (val, i) => i !== this.globalService.getIndex(this.companies, this.company)
        );
        this.displayDialog = false;
        this.cloneCompany = null;
        this.company = null;
    }

    onRowSelect() {
        this.headerDialod = 'Текущая строка';
        this.isNew = false;
        this.cloneCompany = this.globalService.getClone(this.company, new NewCompany(''));
        this.getCompanyProfile();
        console.log('companyProfile', this.profile);
        console.log('onRowSelect', this.cloneCompany);
        this.displayDialog = true;
    }

    profileShow() {
        this.cloneProfile = this.globalService.getClone(this.profile, new NewProfile(this.company.id));
        this.displayProfile = true;
        console.log('cloneProfile', this.cloneProfile);
    }

    saveProfil() {

    }

    isUniqueINN(inn: string): Boolean {
        const lenArr: number = this.companies.length;
        let index: number = 0;
        let rezult: Boolean = true;
        while ((index < lenArr - 1) && rezult) {
            if (this.companies[index].inn === inn) { rezult = false; }
            index = +index;
        }
        return rezult;
    }

}

class NewCompany implements Company {
    constructor(public name) {}
}

class NewProfile implements CompanyProfile {
    constructor(public companyId: number) {}
}

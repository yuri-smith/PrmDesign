import { Component, OnInit } from '@angular/core';
// import {ToolbarModule} from 'primeng/primeng';
import { Router } from '@angular/router';
import {
  ToolbarModule,
  ButtonModule,
  SplitButtonModule,
  MenuModule,
  MenuItem
} from 'primeng/primeng';

import {TooltipModule} from 'primeng/tooltip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) { }

  private items: MenuItem[];
  title = 'PrmDesign';
  private isLogIn: Boolean = true;
  private isLogOut: Boolean = false;
  // public isLogged: boolean = false;
  // localStorage.setItem('whatever', 'something');
  public user: String = 'Аноним';

  ngOnInit() {
    this.items = [
        {
          label: 'Единицы измерения',
          routerLink: ['/dims'],
          command: () => {
            this.dictupdate('Единицы измерения');
          }
        },
        {label: 'Валюты', routerLink: ['/currencies'],
          command: () => { this.dictupdate('Валюты'); }},
        {label: 'Страны', routerLink: ['/countries'],
          command: () => { this.dictupdate('Страны'); }},
        {label: 'Города', routerLink: ['/cities'],
          command: () => { this.dictupdate('Города'); }},
        {label: 'Компании', routerLink: ['/companies'],
          command: () => { this.dictupdate('Компании'); }},
        {label: 'XXXX', routerLink: [''],
          command: () => { this.dictupdate('XXXX'); }},
        {label: 'VVVV', icon: 'fa-download', routerLink: ['/dims'],
          command: () => { this.dictupdate('VVVV'); }},
      ];
  }

  dictupdate(dict: string) {
    this.title = 'PrmDesign - ' + dict;
  }

  login() {
    this.user = 'Пользователь';
    // this.isLogged = true;
    this.isLogIn = false;
    this.router.navigateByUrl('/login');
  }

  public logout() {
    console.log('this.user - ', this.user);
    this.user = 'Аноним';
    this.isLogOut = false;
    this.isLogIn = true;
    // this.isLogged = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { LoginService } from '../shared';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AppComponent]
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private location: Location,
    private appComp: AppComponent
  ) { }

  ngOnInit() {

  }

  cancel() {
    console.log('appComp.user - до', this.appComp.user);
    // console.log("appComp.isLogged - до", this.appComp.isLogged);
    this.appComp.logout();
    this.appComp.user = 'Аноним';
    // this.appComp.isLogged = false;
    console.log('appComp.user - после', this.appComp.user);
    // console.log("appComp.isLogged - после", this.appComp.isLogged);
    // this.appComp.ngOnInit();
    this.location.back(); // <-- go back to previous location on cancel
  }
}

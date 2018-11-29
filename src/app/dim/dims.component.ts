import { Component, OnInit } from '@angular/core';
import { Dim, DimService } from '../shared';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-dims',
  templateUrl: './dims.component.html',
  styleUrls: ['./dims.component.css'],
  providers: [ DimService ]
})
export class DimsComponent implements OnInit {
  errorMessage: string = '';
  loading: boolean = false;
  displayDialog: boolean;
  headerDialod: string;
  dim: Dim = new NewObj('');
  selectedDim: Dim;
  newDim: boolean;
  dims: Dim[];
  constructor(
    private dimService: DimService
  ) {}

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.getDims();
      this.loading = false;
    }, 5000);
  }

  getDims() {
    this.dimService.getDims().subscribe(
      data => {
        console.log('getDims()', data);
        this.dims = data;
      },
      error => { this.errorMessage = <any>error; }
    );
  }

  showDialogToAdd() {
    this.headerDialod = 'Новая строка';
    this.newDim = true;
    this.dim = new NewObj('');
    this.displayDialog = true;

  }

  save() {
    const dims = [...this.dims];
    if (this.newDim) {
      this.dimService.addDim(this.dim).subscribe(
        data => {
          console.log('Added Dim.Id', data.body.id);
          console.log('Added Dim', this.dim);
          dims.push(data.body);
          this.dims = [...dims];
          console.log('dims', dims);
        },
        error => {
          console.log(<any>error);
        }
      );
      console.log('Added Dim', this.dim);
  } else {
      // this.dimService.getDim(this.dim.id).subscribe(
      //  data => {
      //    console.log('getDim', data)
      //  },
      //  error => {
      //    console.log(<any>error)
      //  }
      // );

      this.dimService.putDim(this.dim.id, this.dim).subscribe(
        data => {
          console.log('put data', data);
        },
        error => {
          console.log(<any>error);
        }
      );
      dims[this.findSelectedItemIndex()] = this.dim;
      this.dims = [...dims];

    }

    console.log('this.dim', this.dim);
    this.dim = null;
    this.displayDialog = false;

  }

  delete() {
    this.dimService.deleteDim(this.selectedDim.id).subscribe(
      data => {
        console.log('Data', data);
      },
      error => {
        console.log(<any>error);
      }
    );
    const index = this.findSelectedItemIndex();
    this.dims = this.dims.filter((val, i) => i !== index);
    this.dim = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    console.log('onRowSelect', event.data);
    this.headerDialod = 'Текущая строка';
    this.newDim = false;
    this.dim = this.cloneObj(event.data);
    this.displayDialog = true;
    console.log('Selected Dim', this.dim);
  }

  cloneObj(c: Dim): Dim {
    const obj = new NewObj('');
    for (const prop in c) {
      if (c !== null) {
        obj[prop] = c[prop];
      }
    }
    return obj;
  }

  findSelectedItemIndex(): number {
    return this.dims.indexOf(this.selectedDim);
  }

}

class NewObj implements Dim {
  constructor(public name) {}
}

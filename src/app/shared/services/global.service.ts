import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

  constructor() { }

  getmaxid(objArr: any[]): number {
    let len: number;
    let i: number = 0;
    let maxid: number = 0;
    for (len = objArr.length; i < len; i++) {
      if (maxid < objArr[i]['id']) {
        maxid = objArr[i]['id'];
      }
    }
    return maxid;
  }

  getClone(curObj: any, tarObj: any): any {
    for (const prop in curObj) {
      if (curObj !== null) {
        tarObj[prop] = curObj[prop];
      }
    }
    return tarObj;
  }

  getIndex(allObj: any[], selObj: any): number {
    return allObj.indexOf(selObj);
  }
}

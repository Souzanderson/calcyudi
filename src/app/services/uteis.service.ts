import { Injectable } from '@angular/core';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class UteisService {
  private loading = false;
  private message = "Carregando...";

  constructor() { }

  getLoading() {
    try {
      return this.loading;
    }
    catch (e) {
      return false;
    }
  }

  getMessage() {
    try {
      return this.message;
    }
    catch (e) {
      return "Carregando...";
    }
  }

  initSpin(message) {
    this.message = message;
    this.loading = true;
  }

  pauseSpin() {
    this.message = "Carregando..."
    this.loading = false;
  }

  formatChart(value: any, keyname, keyvalue) {
    let res = {}
    let labels = []
    value = value.sort((a: any, b: any) => {
      return (new Date(b.dtupdate).getTime() - new Date(a.dtupdate).getTime());
    });
    for (let v of value) {
      if (!res[v.dtupdate]) {
        res[v.dtupdate] = {}
      }
      res[v.dtupdate][v[keyname]] = v[keyvalue]
      if (labels.indexOf(v[keyname]) == -1) labels.push(v[keyname])
    }
    let data = []
    for (let r in res) {
      let v = {}
      v['x'] = moment(r).format('DD/MM HH:mm:ss')
      for (let l of labels) {
        if (res[r][l]) {
          v[l] = Number(res[r][l])
        } else {
          v[l] = 0.00
        }
      }
      data.push(v)
    }
    return [data.reverse(), labels]
  }
}

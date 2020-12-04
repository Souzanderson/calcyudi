import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class UteisService {
  private loading = false;
  private message = "Carregando...";

  constructor(
    private snackBar: MatSnackBar
  ) { }

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

  formatChart(arr: any, keyname, keyvalue) {
    let res = {}
    let labels = []
    let value = [...arr]
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
        }
        // else {
        //   v[l] = 0.00
        // }
      }
      data.push(v)
    }
    return [data.reverse(), labels]
  }

  public alertDanger(message: string = "", duration = 4000) {
    this.snackBar.open(message, 'x', {
      panelClass: ['dangersnack'],
      duration: duration,
    });
  }

  public compareDate(d1, d2, dc) {
    try {
      let dtc = new Date(dc)
      dtc.setHours(0, 0, 0)
      if (!d1) return true
      let dt1 = new Date(d1 + " 00:00:00")
      if (!d2) return dtc.getTime() == dt1.getTime()
      let dt2 = new Date(d2 + " 00:00:00")
      return dtc.getTime() >= dt1.getTime() && dtc.getTime() <= dt2.getTime()
    }
    catch (w) {
      return true
    }
  }

  public compareStr(str1, str2) {
    try {
      if (!str1) return true
      if (!str2) return true
      return String(str1).toUpperCase().indexOf(String(str2).toUpperCase()) > -1
    }
    catch (_) {
      return true
    }
  }
}

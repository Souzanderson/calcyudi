import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../interfaces/user';
import { Observable } from 'rxjs';

const _URL = "https://sensorsyudi.herokuapp.com/"

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  user: User = {};

  constructor(
    private http: HttpClient
  ) { 
  }

  public login(login, senha) {
    let data = {
      "login": login,
      "senha": senha
    }
    console.log(data);
    
    return this.http.post(_URL+"login", data)
  }

  public get(table): Observable<any>{
    return this.http.get(_URL + table+`?hascode=${this.user.hascode}`)
  }

  public post(table,value): Observable<any>{
    return this.http.post(_URL + table+`?hascode=${this.user.hascode}`, value)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../interfaces/user';

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

  public get(table){
    return this.http.get(_URL + table+`?hascode=${this.user.hascode}`)
  }

  public post(table,value){
    return this.http.post(_URL + table+`?hascode=${this.user.hascode}`, value)
  }
}

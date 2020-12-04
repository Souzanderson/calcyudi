import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection.service';
import { UteisService } from 'src/app/services/uteis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: string;
  public senha: string;

  constructor(
    private conn: ConnectionService,
    private route: Router,
    private util: UteisService
  ) { }

  ngOnInit(): void {
    this.conn.user.hascode = null;
  }

  async login() {
    this.util.initSpin('Entrando...')
    try {
      let res = await this.conn.login(this.user, this.senha).toPromise();
      if (res ? res['hascode'] : false) {
        this.conn.user.hascode = res['hascode']
        // this.route.navigate(['/central'])
        this.route.navigate(['/temperatures'])
      }
      else {
        this.util.alertDanger('Erro ao fazer login!')
      }
    }
    catch (e) {
      this.util.alertDanger('Erro ao fazer login!')
    }
    this.util.pauseSpin()
  }

}

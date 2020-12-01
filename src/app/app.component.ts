import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {UteisService} from 'src/app/services/uteis.service';
import { ConnectionService } from './services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';

  constructor(
    public util: UteisService,
    public conn: ConnectionService,
    public route: Router
  ){
    setInterval(() => {
      if(!this.conn.user.hascode){
        this.route.navigate(['/'])
      }
    }, 100);
  }
}

import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { UteisService } from 'src/app/services/uteis.service';

@Component({
  selector: 'app-listmicrosw',
  templateUrl: './listmicrosw.component.html',
  styleUrls: ['./listmicrosw.component.scss']
})
export class ListmicroswComponent implements OnInit {
  public list: any = []
  public datachart:any;
  public labelchart:any;
  public showgraph = false;

  constructor(
    private conn: ConnectionService,
    private util: UteisService
  ) {
  }

  ngOnInit(): void {
    this.getTable()
  }

  async getTable() {
    this.util.initSpin('Baixando dados...')
    try {
      this.list = await this.conn.get('microswitch').toPromise();
      console.log(this.list);
      [this.datachart, this.labelchart] = this.util.formatChart(this.list,'idlimits','action')
    } catch (error) {

    }
    this.util.pauseSpin()
  }

}
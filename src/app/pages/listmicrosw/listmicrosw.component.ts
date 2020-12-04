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
  public listaux: any = []
  public datachart: any;
  public labelchart: any;
  public showgraph = false;
  //FILTROS
  public sensor: string;
  public dtini: string;
  public dtfim: string;
  constructor(
    private conn: ConnectionService,
    private util: UteisService
  ) {
  }

  async ngOnInit() {
    await this.getTable()
    this.listaux = this.list
  }

  public instant() {
    this.list = this.listaux.filter((item: any) => {
      return this.util.compareDate(this.dtini, this.dtfim, item['dtupdate']) && this.util.compareStr(item['idlimits'], this.sensor)
    })
    let v = this.util.formatChart(this.list, 'idlimits', 'action')
    this.datachart = v[0]
    this.labelchart = v[1]
  }
  
  async getTable() {
    this.util.initSpin('Baixando dados...')
    try {
      this.list = await this.conn.get('microswitch').toPromise();
      console.log(this.list);
      let v = this.util.formatChart(this.list, 'idlimits', 'action')
      this.datachart = v[0]
      this.labelchart = v[1]
    } catch (error) {

    }
    this.util.pauseSpin()
  }

}
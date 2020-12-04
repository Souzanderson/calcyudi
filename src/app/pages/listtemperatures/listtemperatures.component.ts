import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service'
import { UteisService } from 'src/app/services/uteis.service';

@Component({
  selector: 'app-listtemperatures',
  templateUrl: './listtemperatures.component.html',
  styleUrls: ['./listtemperatures.component.scss']
})
export class ListtemperaturesComponent implements OnInit {
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

  async getTable() {
    this.util.initSpin('Baixando dados...')
    try {
      this.list = await this.conn.get('temperature').toPromise();
      let v = this.util.formatChart(this.list, 'idsensor', 'temperatura')
      this.datachart = v[0]
      this.labelchart = v[1]
    } catch (error) {

    }
    this.util.pauseSpin();
  }

  public instant() {
    console.log(this.listaux);
    console.log(this.dtini);

    this.list = this.listaux.filter((item: any) => {
      return this.util.compareDate(this.dtini, this.dtfim, item['dtupdate']) && this.util.compareStr(item['idsensor'], this.sensor)
    })
    let v = this.util.formatChart(this.list, 'idsensor', 'temperatura')
    this.datachart = v[0]
    this.labelchart = v[1]
  }

}

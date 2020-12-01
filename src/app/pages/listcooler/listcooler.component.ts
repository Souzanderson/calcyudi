import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { UteisService } from 'src/app/services/uteis.service';

@Component({
  selector: 'app-listcooler',
  templateUrl: './listcooler.component.html',
  styleUrls: ['./listcooler.component.scss']
})
export class ListcoolerComponent implements OnInit {
  public list: any = []
  public datachart: any;
  public labelchart: any;
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
      this.showgraph = false;
      this.list = await this.conn.get('cooler').toPromise();
      console.log(this.list);
      [this.datachart, this.labelchart] = this.util.formatChart(this.list, 'idcooler', 'isligado')
    }
    catch (e) {

    }
    this.util.pauseSpin();
  }

}
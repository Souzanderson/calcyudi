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
      this.list = await this.conn.get('temperature').toPromise();
      console.log(this.list);
      [this.datachart, this.labelchart] = this.util.formatChart(this.list,'idsensor','temperatura')
    } catch (error) {

    }
    this.util.pauseSpin();
  }

}

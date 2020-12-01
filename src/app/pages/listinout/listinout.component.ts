import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { UteisService } from 'src/app/services/uteis.service';

@Component({
  selector: 'app-listinout',
  templateUrl: './listinout.component.html',
  styleUrls: ['./listinout.component.scss']
})
export class ListinoutComponent implements OnInit {
  public input_a: any = []
  public input_b: any = []
  public output_a: any = []
  public datachart: any;
  public labelchart: any;
  public datachartout: any;
  public labelchartout: any;
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
      this.input_a = await this.conn.get('input_a').toPromise();
      this.input_b = await this.conn.get('input_b').toPromise();
      this.output_a = await this.conn.get('output_a').toPromise();
      var value = this.input_a.concat(this.input_a, this.input_b, this.output_a);
      [this.datachart, this.labelchart] = this.util.formatChart(value, 'idsensor', 'value')

    } catch (error) {

    }
    this.util.pauseSpin()
  }

}
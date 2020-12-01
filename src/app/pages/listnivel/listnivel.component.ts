import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { UteisService } from 'src/app/services/uteis.service';

@Component({
  selector: 'app-listnivel',
  templateUrl: './listnivel.component.html',
  styleUrls: ['./listnivel.component.scss']
})
export class ListnivelComponent implements OnInit {
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
      this.list = await this.conn.get('level').toPromise();
      console.log(this.list);
      [this.datachart, this.labelchart] = this.util.formatChart(this.list,'idlevel','qtlevel')
    } catch (error) {

    }
    this.util.pauseSpin()
  }

  

}

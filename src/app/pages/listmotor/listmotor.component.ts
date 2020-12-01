import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { UteisService } from 'src/app/services/uteis.service';

@Component({
  selector: 'app-listmotor',
  templateUrl: './listmotor.component.html',
  styleUrls: ['./listmotor.component.scss']
})
export class ListmotorComponent implements OnInit {
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
      this.list = await this.conn.get('motor').toPromise();
      console.log(this.list);[this.datachart, this.labelchart] = this.util.formatChart(this.list.map(item=> {
        if(item.direction == 0){
          item.velocity = Number(item.velocity)*-1 
        }else{
          item.velocity = Number(item.velocity)
        }
        return item
      }),'idmotor','velocity')
    } catch (error) {

    }
    this.util.pauseSpin()
  }

}

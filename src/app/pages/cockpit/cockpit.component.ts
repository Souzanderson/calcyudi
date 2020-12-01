import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection.service';
import { UteisService } from 'src/app/services/uteis.service';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
  public temperatures: any = []
  public level: any = []
  public motor: any = []
  public cooler: any = []
  public mswitch: any = []
  public input_a: any = []
  public input_b: any = []
  public output_a: any = []
  private timer;
  constructor(
    private util: UteisService,
    private conn: ConnectionService
  ) { }

  ngOnInit(): void {
    this.getTable()
    this.timer = setInterval(() => {
      this.getTable(true)
    }, 10000);
  }

  ngOnDestroy(){
    clearInterval(this.timer)
  }

  async getTable(silence = false) {
    if (!silence) this.util.initSpin('Baixando dados...')
    try {
      let data:any = await this.conn.get('temperature').toPromise();
      this.temperatures = data.slice(0,3);
      data = await this.conn.get('level').toPromise();
      this.level = data.slice(0,3);
      data = await this.conn.get('motor').toPromise();
      this.motor = data.slice(0,3);
      data = await this.conn.get('cooler').toPromise();
      this.cooler = data.slice(0,3);
      data = await this.conn.get('microswitch').toPromise();
      this.mswitch = data.slice(0,3);
      data = await this.conn.get('input_a').toPromise();
      this.input_a = data[0];
      data = await this.conn.get('input_b').toPromise();
      this.input_b = data[0];
      data = await this.conn.get('output_a').toPromise();
      this.output_a = data[0];
    } catch (e) {

    }
    if (!silence) this.util.pauseSpin()
  }

}

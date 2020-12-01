import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public items = [
    {
      label: "Central",
      icon: "chrome_reader_mode",
      selected: false,
      route: "central"
    },
    {
      label: "Temperaturas",
      icon: "local_fire_department",
      selected: false,
      route: "temperatures"
    },
    {
      label: "Nível",
      icon: "filter_frames",
      selected: false,
      route: "level"
    },
    {
      label: "Motor",
      icon: "miscellaneous_services",
      selected: false,
      route: "motor"
    },
    {
      label: "Cooler",
      icon: "donut_small",
      selected: false,
      route: "cooler"
    },
    {
      label: "Fim de Curso",
      icon: "pan_tool",
      selected: false,
      route: "microswitch"
    },
    {
      label: "Entradas e Saídas",
      icon: "close_fullscreen",
      selected: false,
      route: "inout"
    },
    
  ]
  constructor(
    public route: Router,
  ) { }

  ngOnInit(): void {
    this.check()
  }

  public go(route) {
    this.route.navigate([`/${route}`])
  }

  private check() {
    for (let item of this.items) {
      if (item.route == this.route.url.replace("/", "")) {
        item.selected = true
      } else item.selected = false
    }
  }

}

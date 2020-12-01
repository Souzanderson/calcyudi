import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";


am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_material);


@Component({
  selector: 'linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {
  @Input() data: any = []
  @Input() labels: any = []
  @Input() titlex: string;
  @Input() titley: string;
  @Input() steped: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.create()
  }

  create() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.data = this.data;
    chart.logo.height = -15000;

    // Create axes
    let axisX = chart.xAxes.push(new am4charts.CategoryAxis());
    axisX.dataFields.category = 'x';

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    if (this.titlex)
      axisX.title.text = this.titlex;
    if (this.titley)
      valueAxis.title.text = this.titley;

    for (let l of this.labels) {
      this.generateSerie(chart, axisX, 'x', l)
    }
    // Legend
    chart.legend = new am4charts.Legend();
    chart.legend.fontSize = 12;
    chart.legend.position = "top";
    chart.legend.marginBottom = 20;
    chart.legend.valueLabels.template.fontSize = 12;
  }

  generateSerie(chart, dateAxis, x, y) {
    let series;
    if (this.steped) {
      series = chart.series.push(new am4charts.StepLineSeries());
    } else {
      series = chart.series.push(new am4charts.LineSeries());
    }
    series.name = y
    series.dataFields.valueY = y;
    series.dataFields.categoryX = x;
    series.tooltipText = "{value}"
    series.tensionX = 0.77;
    series.tooltip.pointerOrientation = "vertical";
    series.clustered = false;
    chart.cursor = new am4charts.XYCursor();
    chart.exporting.menu = new am4core.ExportMenu();
    // chart.cursor.xAxis = dateAxis;

    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarX = new am4core.Scrollbar();

    let bullet = series.bullets.push(new am4charts.CircleBullet());
    series.heatRules.push({
      target: bullet.circle,
      min: 1,
      max: 1,
      property: "radius"
    });

    bullet.tooltipText = "{name} => {valueY.value}";
  }

}

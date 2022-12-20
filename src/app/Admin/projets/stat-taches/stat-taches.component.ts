import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'app/models/Tache';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-stat-taches',
  templateUrl: './stat-taches.component.html',
  styleUrls: ['./stat-taches.component.scss']
})
export class StatTachesComponent implements OnInit {
  @Input()taches:Tache[];
  nbTODO :number =0;
  nbDOING :number =0;
  nbDONE :number =0;
  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.increm();
    this.stat();
  }
  reloadComponent() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate(['/Projets']);
  }
increm(){
  for(let tache of this.taches){
    if(tache.etatTache==="DOING"){
this.nbTODO++;
    }
    else if (tache.etatTache==="TODO"){
      this.nbDOING++;
    }
    else {
    this.nbDONE++;

  }
  }
}


  startAnimationForLineChart(chart){
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function(data) {
      if(data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if(data.type === 'point') {
            seq++;
            data.element.animate({
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
    });

    seq = 0;
};

  stat(){

   
    const dataDailySalesChart: any = {
      labels: ['TODO', 'DOING', 'DONE'],
      series: [
          [this.nbTODO, this.nbDOING, this.nbDONE]
      ]
  };

 const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
      }),
      low: 0,
      high: 30, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
  }

  var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

  this.startAnimationForLineChart(dailySalesChart);
  }
}

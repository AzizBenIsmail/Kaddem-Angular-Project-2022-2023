import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Projet } from 'app/models/Projet';
import * as Chartist from 'chartist';


@Component({
  selector: 'app-stat-projets',
  templateUrl: './stat-projets.component.html',
  styleUrls: ['./stat-projets.component.scss']
})
export class StatProjetsComponent implements OnInit {
  @Input()projets:Projet[];
  fontSizePx = 16;
  nbPFE:number=0;
  nbPIDEV:number=0;
  nbJEU:number=0;
 
  constructor(private _router: Router) { }

  ngOnInit(): void {

   
 this.calculNombreProjetsParType();
 this.stat();



 


  }
  

  reloadComponent() {
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate(['/Projets']);
  }
  calculNombreProjetsParType(){

  for(let projet of this.projets)
  {
  if(projet.typeProjet==="PFE")
  {this.nbPFE++;}
 else  if(projet.typeProjet==="PIDEV")
  {this.nbPIDEV++;}
 else
 this.nbJEU++; 
 
  }

}
  startAnimationForBarChart(chart){
    let seq2: any, delays2: any, durations2: any;

   
    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function(data) {
      if(data.type === 'bar'){
          seq2++;
          data.element.animate({
            opacity: {
              begin: seq2 * delays2,
              dur: durations2,
              from: 0,
              to: 1,
              easing: 'ease'
            }
          });
      }
    });

    seq2 = 0;
};
  



stat(){





  var datawebsiteViewsChart = {
    labels:['PIDEV','JEUVIDEO','PFE'],
    series: [
      [this.nbPIDEV, this.nbJEU, this.nbPFE]
  
    ]
  };
  var optionswebsiteViewsChart = {
      axisX: {
          showGrid: false
      },
      low: 0,
      high: 20,
      
      chartPadding: { top: 0,  right: 5, bottom: 0, left: 0}
  };
  var responsiveOptions: any[] = [
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];
  var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
  
  //start animation for the Emails Subscription Chart
  this.startAnimationForBarChart(websiteViewsChart);
  

}
}

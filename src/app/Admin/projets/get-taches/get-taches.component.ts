import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'app/models/Projet';
import { Tache } from 'app/models/Tache';
import { ProjetService } from 'app/Services/ProjetService/projet.service';

import { TacheService } from 'app/Services/TacheService/tache.service';
import * as Chartist from 'chartist';
import { delay } from 'rxjs';

@Component({
  selector: 'app-get-taches',
  templateUrl: './get-taches.component.html',
  styleUrls: ['./get-taches.component.scss']
})
export class GetTachesComponent implements OnInit {

  @Input()projet:Projet;
 
  taches: Tache[] = [];
  tache : Tache=new Tache();
 // projet : Projet=new Projet();
 clickedUpdateTache : boolean = false;
 clicked : boolean = false;
 projetBinding:Projet;
 tacheBinding:Tache;
 progress:number=0;
 color :string = 'rgb(178, 175, 175)';


   constructor(private _TacheService: TacheService , private _projetService: ProjetService, private _routerAdd: Router,
    private _activatedRoute: ActivatedRoute ) {
     
    
    }
   // id : number;
    ngOnInit(): void {

      

      const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
      console.log(isIdPresent);
      if (isIdPresent) {
          const id = +this._activatedRoute.snapshot.paramMap.get('id');
         
          this._TacheService.getTachesByProjet(id).subscribe(data => {
            this.taches = data;
          });
      }  
   // this.listTaches();
    
   }
   
  
  listTaches() {
    this._TacheService.getTachesByProjet(this.projet.idProjet).subscribe(data => {
      this.taches = data;
    });
  }
  reloadComponent() {
    this._routerAdd.routeReuseStrategy.shouldReuseRoute = () => false;
    this._routerAdd.onSameUrlNavigation = 'reload';
    this._routerAdd.navigate(['/Projets']);
  }


  deleteTache(id:number ){
   
    this._TacheService.deleteTache(id).subscribe(
      data => {
        console.log('deleted response', data);
       
        this.listTaches();
      }
    )
    
   
  }
  updateTache(projet:Projet ,tache:Tache){
    this.projetBinding=projet;
    this.tacheBinding=tache;
    this.clickedUpdateTache=true;
  }
 
  stats()
 {
  this.clicked=true;
 }
 
}

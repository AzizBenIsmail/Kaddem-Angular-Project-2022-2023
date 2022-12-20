import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'app/models/Projet';
import { Tache } from 'app/models/Tache';
import { ProjetService } from 'app/Services/ProjetService/projet.service';
import { TacheService } from 'app/Services/TacheService/tache.service';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.scss']
})
export class UpdateTacheComponent implements OnInit {
  @Input()tache:Tache;
  @Input()projet:Projet;
  taches: Tache[] = [];
 // tache : Tache=new Tache();
 // projet : Projet=new Projet();
  
   constructor(private _TacheService: TacheService , private _ProjetService: ProjetService,private _routerAdd: Router,
    private _activatedRoute: ActivatedRoute) {
    
    }
    ngOnInit(): void {
     
    
   }
   reloadComponent() {
    this._routerAdd.routeReuseStrategy.shouldReuseRoute = () => false;
    this._routerAdd.onSameUrlNavigation = 'reload';
    this._routerAdd.navigate(['/Projets']);
  }

   enregistrerTache(f:NgForm){
    this._TacheService.saveTache(this.tache,this.projet.idProjet).subscribe(
      data => {
        console.log('response', data);
       this.reloadComponent();
      })

   }
 }
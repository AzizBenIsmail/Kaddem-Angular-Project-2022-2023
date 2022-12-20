import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'app/models/Projet';
import { NotifService } from 'app/Services/Notification/notif.service';
import { ProjetService } from 'app/Services/ProjetService/projet.service';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.scss']
})
export class UpdateProjetComponent implements OnInit {
  @Input()projet:Projet;
  
  projets: Projet[] = [];
 // projet : Projet=new Projet();
  date: string;
  startDate= new Date();
  clicked :boolean = false;
  constructor(private _notificationService: NotifService ,private _projetService: ProjetService ,private _routerUp: Router ,  private _activatedRoute: ActivatedRoute) { 
    this._notificationService.requestPermission();  
  }
  
  ngOnInit(): void {

   
    
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      
      
      this.date= yyyy + '-' + mm + '-' + dd;



  
    }
    notify() {  

      console.log("test");
        let data: Array < any >= [];  
        data.push({  
            'title': 'Alerte',  
            'alertContent': 'Un projet a été modifié avec succées'  
        });  
       
        this._notificationService.generateNotification(data);  
    }  

  enregistrerProjet(data:Projet){
   
    this._projetService.updateProjet(data,this.projet.idProjet).subscribe(
      data => {
        console.log('response', data);
   
        this.reloadComponent();
      })

  }
  onDateChange(): void {
    this.startDate = this.projet.dateDebutP;
  
  }  


  reloadComponent() {
    this._routerUp.routeReuseStrategy.shouldReuseRoute = () => false;
    this._routerUp.onSameUrlNavigation = 'reload';
    this._routerUp.navigate(['/Projets']);
    this.notify();
}





}
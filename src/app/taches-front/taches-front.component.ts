import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Projet } from 'app/models/Projet';
import { Tache } from 'app/models/Tache';
import { ProjetService } from 'app/Services/ProjetService/projet.service';
import { TacheService } from 'app/Services/TacheService/tache.service';


@Component({
  selector: 'app-taches-front',
  templateUrl: './taches-front.component.html',
  styleUrls: ['./taches-front.component.scss']
})
export class TachesFrontComponent implements OnInit  {
  taches: Tache[] = [];
  todo :  String[]=[];
 
  doing : String[] =[];
  done : String[] =[];
  tache : Tache=new Tache();
 projet :Projet=new Projet();

  constructor(private _TacheService: TacheService,private _projetService: ProjetService
     ) { }

    ngOnInit(): void {

     }
     

    listTaches() {
     this._TacheService.getTaches().subscribe(data => {
        this.taches = data;
        for(let tache of this.taches)
        {
        if(tache.etatTache==="DONE")
        {
        this.done.push(tache.descriptionTache);
        }
        else  if(tache.etatTache==="TODO")
        { 
        this.todo.push(tache.descriptionTache);
        }
       else
        { 
        this.doing.push(tache.descriptionTache);
      }
        }
      }); 
    }


  drop(event: CdkDragDrop<string[]>, type : String ) {
 
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
     
    } else {

    

      this._TacheService.getTacheByName(event.previousContainer.data[event.previousIndex]).subscribe(data => {
        this.tache = data;
     
      


      if(type==="todo"){
      
            this.tache.etatTache="TODO";
          
      }
      else if (type==="doing"){
        this.tache.etatTache="DOING";
       
      }
      else
      {
        this.tache.etatTache="DONE";


      

      
      }
      console.log(this.tache);
      
      this._TacheService.saveTache(this.tache,this.projet.idProjet).subscribe(
        data => {
       })  



      });



 
    transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }












viderRech(){
  this.doing=[];
  this.done=[];
  this.todo=[];
}


 
  applyFilter(filterValue: string) {
    this.viderRech();
    this.projet=new Projet();
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

    this._TacheService. getTachesByNameProjet(filterValue).subscribe(data => {
      this.taches = data;
      for(let tache of this.taches)
      {
      if(tache.etatTache==="DONE")
      {this.done.push(tache.descriptionTache);}
     else  if(tache.etatTache==="TODO")
     {this.todo.push(tache.descriptionTache);
    
    }
     else
     {this.doing.push(tache.descriptionTache);}
     
      }
    
    });
   

   
      this._projetService.getProjetByName(filterValue).subscribe(data => {
         this.projet = data;


       
    
    }
  );
  }

}
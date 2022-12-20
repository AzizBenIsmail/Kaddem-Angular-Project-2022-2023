import { animate, AnimationMetadata, style } from '@angular/animations';
import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'app/models/Projet';
import { ProjetService } from 'app/Services/ProjetService/projet.service';
import { ProjetResolver } from '../ProjetResolver' 

import { Workbook } from 'exceljs/dist/exceljs.min.js';
import * as fs from 'file-saver';
import { PageEvent } from '@angular/material/paginator';

import { map, Observable } from 'rxjs';
import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-get-projets',
  templateUrl: './get-projets.component.html',
  styleUrls: ['./get-projets.component.scss']
})
export class GetProjetsComponent implements OnInit {

  projets: Projet[] = [];
  projet : Projet=new Projet();
  clickedUpdateProjet : boolean = false;
  clickedAddProjet : boolean = false;
  clickedAddTache : boolean = false;
  clickedGetTaches : boolean=false;
  clickedDelete : boolean=false;
  deletAuto: boolean=false;
  clicked:boolean=false;
  datepipe: DatePipe;
 date: string;
existe : Number ;
 projetBinding:Projet;
 page: number = 1;
 count: number = 0;
 tableSize: number = 3;
nomProjet : String;
clickedNotifUpdate:boolean=false;
color :string = 'rgb(178, 175, 175)';
fontSizePx = 12;

 text:any = {
  
  
 
  Days: "Jours",
  Hours: "Heures",
  Minutes: "Minutes",
  Seconds: "Secondes"
  
};








   constructor(private _projetService: ProjetService ,private router: Router ,  private _activatedRoute: ActivatedRoute
  ) {
      
    }
 
   ngOnInit(): void {
    
   
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    
    this.date= yyyy + '-' + mm + '-' + dd;
   
     //this.listProjets();
      
 console.log("initialisation des projets");
     this._activatedRoute.data.subscribe((data: { projets: Projet[] }) => this.projets = data.projets  ) ;  


  

     

      this._projetService. suppressionAuto().subscribe(data => {
        this.existe = data;
        if(this.existe==1){

       
        this.deletAuto=true;
        this.listProjets();
        document.getElementById('noNotif').hidden = true;
      }
       
      });





     
   }
 
 onTableDataChange(event: any) {
    this.page = event;
    this.listProjets();
   
  }
 

  stats(){

    this.clicked=true;
  
  }

  
    addProjetOutput(newItem: Projet) {
      this.projets.push(newItem);
    }
      


   




   
  


exportExcel(){
 
  let workbook = new Workbook();
  let worksheet = workbook.addWorksheet('Les projets');

  worksheet.columns = [
    { header: 'Nom Projet', key: 'nom', width: 32 },
    { header: 'Type Projet', key: 'type', width: 32 , style: { font: { name: 'Arial Black', size:10} }  },
    { header: 'Date début', key: 'dateDebut', width: 10 },
    { header: 'Date fin', key: 'dateFin', width: 10 },
    { header: 'Durée projet', key: 'duree', width: 10},
  ];
 



  this.projets.forEach(e => {
    worksheet.addRow({ nom: e.nomProjet, type:e.typeProjet, dateDebut:e.dateDebutP, dateFin:e.dateFinP,
    duree:e.dureeProjet },"n");
  });


  workbook.xlsx.writeBuffer().then((data) => {
    let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    fs.saveAs(blob, 'ProjetsData.xlsx');
  
  })
  
}








     listProjets() {
   
       this._projetService.getProjets(0,30).subscribe(data => {
         this.projets = data;
        
        
       });
      
      
     }



    
     deleteProjet(id:number){
       this._projetService.deleteProjet(id).subscribe(
         data => {
           console.log('deleted response', data);
           this.listProjets();
           this.clickedDelete=true;
           document.getElementById('noNotif').hidden = true;
         }
       )
       this.clickedDelete=false; 
      
        }
   
       
   
 
   
     updateProjet(p:Projet){
      this.projetBinding=p;
      this.clickedUpdateProjet=true;
      

    }
 
    addTache(p:Projet){
      this.projetBinding=p;
      this.clickedAddTache=true;
     
    }


    getTaches(p:Projet){
      this.projetBinding=p;
      this.clickedGetTaches=true;
    }


    addProjet(){
     this.clickedAddProjet=true;
    
    }
    openDoc(pdfUrl: string, startPage: number ) {
      window.open(pdfUrl + '#page=' + startPage, '_blank');
    }
    currentStyles: Record<string, string> = {};

    setCurrentStyles() {
     
      this.currentStyles = {
        'background-color': this.projet.nomProjet=='kaddem' ? 'black' : 'red'
       
      };

    }
 
 
  


 
   }
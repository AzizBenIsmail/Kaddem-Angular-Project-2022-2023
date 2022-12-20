import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ReclaimService} from "../../../Services/ReclaimService/reclaim.service";
import {Observable} from "rxjs";
import {Reclamation} from "../../../models/Reclamation";
import {formatDate} from "@angular/common";
import {PageEvent} from "@angular/material/paginator";
import {ConfirmDialogModel} from "../../Contrat/confirmation-dialog/confirmation-dialog.component";
import {ConfirmDialogComponent} from "../../EquipesManagment/confirm-dialog/confirm-dialog.component";
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {AddComponent} from '../../Contrat/add/add.component';
import {AddReclaimComponent} from '../add-reclaim/add-reclaim.component';

@Component({
  selector: 'app-list-of-reclaims',
  templateUrl: './list-of-reclaims.component.html',
  styleUrls: ['./list-of-reclaims.component.scss']
})
export class ListOfReclaimsComponent implements OnInit {

  recs: Reclamation[]=[]
  RNT: Reclamation[]=[]
  RT: Reclamation[]=[]
  rec:Reclamation

  currentDate = new Date();
  cValue = formatDate(this.currentDate, 'dd-MM-yyyy', 'en-US');

  totalElements: any;
  result: boolean;
  reclaimBinding: any;
  showUpdate=false;


  fileNameDialogRef: MatDialogRef<AddReclaimComponent>;

  constructor(private router:Router, private serviceRec: ReclaimService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ListOfR({page:"0", size:"5"})
    this.ListOfRNT()
    this.ListOfRT()
  }
/***************************************Liste Des Reclamations***************************************/
  ListOfR(request){
    return this.serviceRec.ListOfReclaims(request).subscribe((data)=>{
      this.recs=data['content']
      console.log(data)
      this.totalElements=data['totalElements']
    })
  }
  /***************************************Liste Des Reclamations Non Traitees***************************************/
  ListOfRNT(){
    this.serviceRec.ListOfNTReclaims().subscribe((data)=>{
      this.RNT=data
    })
  }
  /***************************************Liste Des Reclamations Non Traitees***************************************/
  ListOfRT(){
    this.serviceRec.ListOfTReclaims().subscribe((data)=>{
      this.RT=data
      console.log("****",data.length)
    })
  }

  confirmDialog(id:any) {
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);


    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData, id
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log(dialogResult)
      if (this.result==true){
        this.serviceRec.deleteReclaim(id).subscribe((d)=>{
          this.ListOfR(null)
          console.log("done")
        })
      }
    });
  }


  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.ListOfR(request);
  }

  showUpdateForm(f:any){
    this.reclaimBinding=f;
    this.showUpdate=true;
  }

    open() {
      const dialogConfig=new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.width="25%";
      this.fileNameDialogRef = this.dialog.open(AddReclaimComponent, dialogConfig)
    }

  traiter(id:any, f:any) {

    this.serviceRec.TraiterRec(id,f).subscribe((data)=>{
      console.log("done !")
      this.ListOfR(null);
    })
  }
}

import { data } from 'jquery';
import { ReponseService } from "./../../../../Services/ReponseService/reponse.service";
import { Reponse } from "./../../../../models/Reponse";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { ThreadService } from 'app/Services/ThreadService/thread.service';

@Component({
  selector: "app-update-thread",
  templateUrl: "./update-thread.component.html",
  styleUrls: ["./update-thread.component.scss"],
})
export class UpdateThreadComponent implements OnInit {
  id:number;
  reponse: Reponse = new Reponse();
  reply:String;
  reponseForm: FormGroup;
  idE :number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private reponseService: ReponseService,
    private ThreadService: ThreadService
  ) {}

  ngOnInit(): void {

  
  }

submit() {


  this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
  this.ThreadService.getById(this.id).subscribe(
data=>{
  console.log(data[0]);
  


},
err=>{
  console.log(err);
  console.log(err);
  console.log(err);
  console.log(err);
  this.reponse.thread= err.error.id;
  this.reponse.display = true;
  this.reponse.etudiant.idE = 1;
}
  )
  console.log( this.reponse.reply);
  
  this.reponseService.create(this.reponse).subscribe(
    data=>{
console.log("success"+data);

    }
    ,
    err=>{
      console.log(err);
      
    }
  )
}
}
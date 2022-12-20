import { Thread } from './../../../../models/Thread';
import { ReponseService } from './../../../../Services/ReponseService/reponse.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Etudiant } from 'app/models/Etudiant';
import { Reponse } from 'app/models/Reponse';

declare var $: any;

@Component({
  selector: 'app-create-reponse',
  templateUrl: './create-reponse.component.html',
  styleUrls: ['./create-reponse.component.scss']
})
export class CreateReponseComponent implements OnInit {

id: FormControl;
reply:FormControl;
display: FormControl;
nb_likes:FormControl;
question:FormControl;
etudiant:FormControl;

  errorMessage: string = "";
  etudiant1:Etudiant=new Etudiant();


  //if uodate
  update:boolean =false;
  @Input() reponse: Reponse = new Reponse();
  @Output() save= new EventEmitter<any>(); 
  thread : Thread=new Thread();

  constructor(private reponseService: ReponseService) {

   
    this.thread.id=1;
    this.thread.display=true;
    this.thread.etudiant.idE=1;
    this.thread.nb_likes=0;
    this.thread.object="object";
    this.thread.question="questuiobn";

this.reponse.id=1;
this.reponse.display=true;
this.reponse.etudiant.idE=1;
this.reponse.nb_likes=0;
this.reponse.reply="reply1";
this.reponse.replydate=new Date();
this.reponse.updatedAt=new Date();
this.reponse.thread=this.thread;

    

  }

  ngOnInit(): void {}

  addreponse() {
    this.etudiant1.idE=1
   // this.reponse.etudiant=this.etudiant;
    this.reponseService.create(this.reponse).subscribe(
      (data) => {
        console.log("added successfully");
      },

      (err) => {
        console.log(err);
        if (err?.status) {
          this.errorMessage = "erro";
        }
      }
    );
  }
  //methedo to show model
  showreponseModal() {
    $("#reponseModal").modal("show");
  }

 resetreponse(f: NgForm){
  f.resetForm();
 }

  savereponse(f: NgForm) {
   this.etudiant1.idE=1
  //  this.reponse.etudiant=this.etudiant;
    console.log("added successfully");
    this.reponseService.create(this.reponse).subscribe(
      (data) => {
        this.save.emit(data);
        console.log("added successfully");
        this.errorMessage=""
      },

      (err) => {
        console.log(err.status)
        if (err?.status) {
          this.errorMessage = err.statusText;
          console.log(this.errorMessage)
        }
        if (err.status!=201) {
          this.errorMessage = err.statusText;
        }
        
   
      },
      ()=>{
        console.log(this.errorMessage)
        if(this.errorMessage==""){
        $("#reponseModal").modal("hide");
        f.resetForm();
        }
      }
    );

  }

}

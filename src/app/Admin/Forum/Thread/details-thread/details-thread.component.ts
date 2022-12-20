import { ActivatedRoute } from '@angular/router';
import { Thread } from 'app/models/Thread';
import { data } from 'jquery';
import { Reponse } from 'app/models/Reponse';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Etudiant } from "app/models/Etudiant";
import { ReponseService } from "app/Services/ReponseService/reponse.service";
import { ThreadService } from 'app/Services/ThreadService/thread.service';
declare var $:any;

@Component({
  selector: "app-details-thread",
  templateUrl: "./details-thread.component.html",
  styleUrls: ["./details-thread.component.scss"],
})
export class DetailsThreadComponent implements OnInit {

  idreply;

  updateR;
  id: number; 
 reply: FormControl;
 object2: String;
  // display: FormControl;
  // nb_likes: FormControl; 
   question: FormControl; 
  //etudiant: FormControl;
  etudiant:Etudiant; 

  newreply: FormControl;
  by: number; 
  reponseForm: FormGroup;
  object: String; 
 // replydate: FormControl; 
  //updatedAt: FormControl; 
  threadDate: Date;
  question2: String;

  reponse: Reponse = new Reponse();
  errorMessage: string = "";
  reponse1: Reponse = new Reponse();

  newreponse: Reponse = new Reponse();

  etudiant1: Etudiant = new Etudiant();
  threadid : number;
  reponses : any;
  add=true;

  thread: Thread = new Thread();
  canLike=true;

  constructor(private activatedRoute:ActivatedRoute ,private ReponseService: ReponseService,private ThreadService: ThreadService) {




  }



  charge(){
 alert(this.reponse.reply);


    

  }

  showReponse(){
    
  }

  likeR(reponse:Reponse){
    reponse.nb_likes++
    this.ReponseService.update(reponse).subscribe(
      data=>{
console.log(data)
      },
      err=>{
        console.log(err);
        
      }
    )
  }


  like(){
    this.ThreadService.getById(this.reponse.thread.id).subscribe(
      data=>{
       
        // this.thread=data
        // this.thread.question=this.reponseForm.value.question;
        // this.ThreadService.update(this.thread).subscribe(
        //   data=>{
        //     console.log(data);
        //     console.log("donnneee");
            
        //   },
        //   err=>{
        //     console.log(err.error());
          
        //     console.log("donnneee");
        //   }
        // )
      },
      err=>{
        this.thread=err.error
        this.reponse.thread.nb_likes=this.reponse.thread.nb_likes+1
        this.thread.nb_likes=this.reponse.thread.nb_likes;
        this.ThreadService.update(this.thread).subscribe(
          data=>{
            console.log(data);
            this.ThreadService.addLike(this.reponse.thread.id,1).subscribe(
              data=>{
                this.canLike=!data
              },
              err=>{
          
              }
            )
            

            
          },
          err=>{
           // console.log(err.error());

          }
        )
      }

    )
  }

  questionf(){

    this.ThreadService.getById(this.reponse.thread.id).subscribe(
      data=>{
       
        // this.thread=data
        // this.thread.question=this.reponseForm.value.question;
        // this.ThreadService.update(this.thread).subscribe(
        //   data=>{
        //     console.log(data);
        //     console.log("donnneee");
            
        //   },
        //   err=>{
        //     console.log(err.error());
          
        //     console.log("donnneee");
        //   }
        // )
      },
      err=>{
        this.thread=err.error
        this.thread.question=this.reponseForm.value.question;
        this.ThreadService.update(this.thread).subscribe(
          data=>{
            console.log(data);

            
          },
          err=>{
            console.log(err.error());

          }
        )
      }

    )
  }

  ngOnInit(): void {


   this.idreply=this.activatedRoute.snapshot.paramMap.get('id');
   this.updateR=this.activatedRoute.snapshot.paramMap.get('r');
   // this.createFormControls(this.reponse);
    //this.createForm();


    
if(this.updateR){

  this.ReponseService.reponsebythread
}




    this.ReponseService.getById(this.idreply).subscribe(
      (data) => {

        if(!this.updateR){

          this.ReponseService.reponsebythread(data.thread.id).subscribe(
            (data)=>{
              this.reponses=data;
              console.log(this.reponses);
              
            }
          )
        }
        this.threadid=data.thread.id;
        console.log(this.threadid);
        
this.id=data.id;
this.etudiant=data.etudiant

         this.by=data.thread.etudiant.idE;
       
        this.threadDate=data.thread.postDate;
        console.log("AYOOOOOOOO"+data.reply);
        this.reponse = data;
        console.log("AYOOOOOOOO"+this.reponse.reply);

if(this.updateR==0){

        this.reponseForm = new FormGroup({
          //object: new FormControl(this.reponse.thread.object),
        //  by: new FormControl(this.reponse.thread.etudiant.idE),
         // threadDate: new FormControl(this.reponse.thread.postDate),
         object:new FormControl(this.reponse.thread.object),
          question: new FormControl(this.reponse.thread.question),
          reply: new FormControl(this.reponse.reply),
          newreply: new FormControl(),
    
    
      });
  this.ThreadService.verifIfLiked(this.reponse.thread.id,1).subscribe(
    data=>{
      this.canLike=!data
    },
    err=>{

    }
  )
    }
    else{
      this.object2 =data.thread.object;
      this.question2=this.reponse.thread.question;
      this.reponseForm = new FormGroup({
        //object: new FormControl(this.reponse.thread.object),
      //  by: new FormControl(this.reponse.thread.etudiant.idE),
       // threadDate: new FormControl(this.reponse.thread.postDate),
       reply: new FormControl(this.reponse.reply),
       
  
  
    });

    this.ThreadService.verifIfLiked(this.reponse.thread.id,1).subscribe(
      data=>{
        this.canLike=!data
      },
      err=>{
  
      }
    )
    }

      },
      (err) => {
        this.reponse = err.error;
        console.log(err);

      },
    );
  }


  up ="";



  deleteReponses(reponse :Reponse,ind:number){
    this.ReponseService.delete(reponse).subscribe(
      ()=>{
        this.reponses.splice(ind,1);
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  // createFormControls(reponse: Reponse) {
  //   this.reply = new FormControl(reponse.reply);
  //   this.display = new FormControl(reponse.display);
  //   this.nb_likes = new FormControl(reponse.nb_likes);
  //   this.question = new FormControl(reponse.thread.question);
  //   this.object = new FormControl(reponse.thread.object);
  // }

  // createForm() {
  //   this.reponseForm = new FormGroup({
  //     reply: this.reply,
  //     display: this.display,
  //     nb_likes: this.nb_likes,
  //     question: this.question,
  //     object: this.object,
  //   });
  // }

  update() {

    this.ReponseService.getById(this.idreply).subscribe(
      data=>{
        this.reponse=data
       this.reponse.reply=this.reponseForm.value.reply 
        alert(this.reponseForm.value.reply)
        console.log(this.reponseForm);
        
    this.ReponseService.update(this.reponse).subscribe(
      data=>{
console.log(data);

      },
      err=>{
        console.log(err);
        
      }
    )}
    )
  }
  addReply(){
this.etudiant1.idE=1;
this.newreponse.display=true;
this.newreponse.etudiant=this.etudiant1;
this.newreponse.nb_likes=0;
this.newreponse.reply=this.reponseForm.value.newreply;
this.newreponse.thread=this.reponse.thread;
this.ReponseService.create(this.newreponse).subscribe(
  data=>{
    this.reponses.push(data)
    console.log(data);
   this.add=false;
    
  }
  ,
  err =>{
    console.log(err);
    
  }
)



  }
}

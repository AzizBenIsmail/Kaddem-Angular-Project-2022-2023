import { Reponse } from './../../../models/Reponse';
import { ActivatedRoute, Router } from '@angular/router';
import { Thread } from 'app/models/Thread';
import { ThreadService } from 'app/Services/ThreadService/thread.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ReponseService } from 'app/Services/ReponseService/reponse.service';;
import { CreateThreadComponent } from '../Thread/create-thread/create-thread.component';
declare var $ : any;

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  @ViewChild(CreateThreadComponent) child: CreateThreadComponent | undefined;
  id;

  thread:Thread = new Thread();
  threads:any;
  errorMessage: string = "";
  reponse:Reponse = new Reponse();
  constructor(private router: Router ,private ThreadService:ThreadService,private ReponseService:ReponseService) {  

ThreadService.findAll().subscribe(
data=>{
  this.threads=data;
}
)
  }

  ngOnInit(): void {
  }
  createThreadRequest(){
    this.child?.showThreadModal();
  }

  addreply(Thread:Thread){
    this.ReponseService.reponsebythread(Thread.id).subscribe(
      data=>{

        
        if(data.length!=0){
          alert("dataaa")
        console.log(data);
        
        console.log(data[0].id);
        this.router.navigateByUrl('/Forum/all/reponse/0/'+data[0].id);
      }
      else{
        
        this.router.navigateByUrl('/Forum/all/reply/'+Thread.id);
      }
        console.log(data);
        
      },
      err=>{
        alert("tesst");
      }

    )
  

  }
}
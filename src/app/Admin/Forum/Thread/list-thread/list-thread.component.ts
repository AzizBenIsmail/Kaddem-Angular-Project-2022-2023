import { CreateThreadComponent } from "./../create-thread/create-thread.component";
import { ThreadService } from "app/Services/ThreadService/thread.service";
import { Reponse } from "./../../../../models/Reponse";
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Thread } from "app/models/Thread";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { data } from "jquery";

@Component({
  selector: "app-list-thread",
  templateUrl: "./list-thread.component.html",
  styleUrls: ["./list-thread.component.scss"],
})
export class ListThreadComponent implements OnInit {
  threads: any;
  thread: Thread = new Thread();
  errorMessage: string = "";
  selectedThread: Thread = new Thread();
  lista:any;

  @ViewChild(CreateThreadComponent) child: CreateThreadComponent | undefined;
  constructor(private threadService: ThreadService) {
    this.threadService.findAll().subscribe(
      (data) => {
        console.log(data)
        this.lista=data
        this.errorMessage = "";
        this.threads = data;
        //  console.log(data)

        for (let i = 0; i < data.length; i++) {
           this.threads[i].etudiant.ide = data[i].etudiant.idE;
        }
        console.log(this.threads);
      },
      (err) => {
        if (err.status != 200) {
          console.log(err);
          this.errorMessage = err.statusText;
        }
      }
    );
  }
  saveThreadWatcher(thread: Thread) {
    let itemIndex = this.threads.findIndex((item) => item.id === thread.id);
    if (itemIndex != -1) {
      this.threads[itemIndex] = thread;
    } else {
      this.threads.push(thread);
    }
  }
  ngOnInit(): void {

    this.threadService.findAll().subscribe(
        (data:any)=>{
          console.log(data)
        }
    )

  }

  editThreadRequest(thread: Thread) {
    this.selectedThread = Object.assign({}, thread);
    this.child.update = true;
    this.child?.showThreadModal();
  }
  createThreadRequest() {
    this.child?.showThreadModal();
  }



  //TO DOOOOO
  deleteThreadRequest(thread: Thread, ind: number) {
    this.threadService.delete(thread).subscribe(
      () => {
        this.threads.splice(ind,1);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

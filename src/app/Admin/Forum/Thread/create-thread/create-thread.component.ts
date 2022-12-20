import { Etudiant } from "./../../../../models/Etudiant";
import { ThreadService } from "./../../../../Services/ThreadService/thread.service";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { Thread } from "app/models/Thread";
import { NgForm } from "@angular/forms";

//jquery declaration
declare var $: any;

@Component({
  selector: "app-create-thread",
  templateUrl: "./create-thread.component.html",
  styleUrls: ["./create-thread.component.scss"],
})
export class CreateThreadComponent implements OnInit {
  errorMessage: string = "";
  etudiant: Etudiant = new Etudiant();

  //if uodate
  update: boolean = false;
  @Input() thread: Thread = new Thread();
  @Output() save = new EventEmitter<any>();

  constructor(private threadService: ThreadService) {}

  ngOnInit(): void {}

  addThread() {
    this.etudiant.idE = 1;
    this.thread.etudiant = this.etudiant;
    this.threadService.create(this.thread).subscribe(
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
  showThreadModal() {
    $("#threadModal").modal("show");
  }

  resetThread(f: NgForm) {
    f.resetForm();
  }

  saveThread(f: NgForm) {
    this.etudiant.idE = 1;
    // this.thread.etudiant = this.etudiant;
    console.log("added successfully");
    this.threadService.create(this.thread).subscribe(
      (data) => {
        this.save.emit(data);
        console.log("added successfully");
        this.errorMessage = "";
      },

      (err) => {
        console.log(err.status);
        if (err?.status) {
          this.errorMessage = err.statusText;
          console.log(this.errorMessage);
        }
        if (err.status != 201) {
          this.errorMessage = err.statusText;
        }
      },
      () => {
        console.log(this.errorMessage);
        if (this.errorMessage == "") {
          $("#threadModal").modal("hide");
          f.resetForm();
        }
      }
    );
  }
}

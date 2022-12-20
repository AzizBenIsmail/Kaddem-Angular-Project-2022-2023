import { ReponseService } from "./../../../../Services/ReponseService/reponse.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Reponse } from "app/models/Reponse";
import { CreateReponseComponent } from "../create-reponse/create-reponse.component";
import { Router } from "@angular/router";

declare var $: any;

@Component({
  selector: "app-list-reponse",
  templateUrl: "./list-reponse.component.html",
  styleUrls: ["./list-reponse.component.scss"],
})
export class ListReponseComponent implements OnInit {
  Reponses: any;
  Reponse: Reponse = new Reponse();
  errorMessage: string = "";
  selectedReponse: Reponse = new Reponse();

  @ViewChild(CreateReponseComponent) child: CreateReponseComponent | undefined;
  constructor(private router: Router, private ReponseService: ReponseService) {
    this.ReponseService.findAll().subscribe(
      (data) => {

        console.log("yooooo");
        
        this.errorMessage = "";
        this.Reponses = data;
        //  console.log(data)

        for (let i = 0; i < data.length; i++) {
          //  this.Reponses[i].etudiant.ide = data[i].etudiant.idE;
        }
        console.log(this.Reponses);
      },
      (err) => {
        if (err.status != 200) {
          console.log(err);
          this.errorMessage = err.statusText;
        }
      }
    );
  }


  btnClickup(Reponse:Reponse) {
    this.router.navigateByUrl('/Forum/all/reponse/1/'+Reponse.id);
};
btnClickw(Reponse:Reponse) {
  this.router.navigateByUrl('/Forum/all/reponse/0/'+Reponse.id);
};

  ngOnInit(): void {}

  addreponse() {
    //   this.etudiant.idE=1
    // this.Reponse.etudiant=this.etudiant;
    this.ReponseService.create(this.Reponse).subscribe(
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

  resetreponse(f: NgForm) {
    f.resetForm();
  }
  saveReponseWatcher(Reponse: Reponse) {
    let itemIndex = this.Reponses.findIndex((item) => item.id === Reponse.id);
    if (itemIndex != -1) {
      this.Reponses[itemIndex] = Reponse;
    } else {
      this.Reponses.push(Reponse);
    }
  }

  editReponseRequest(Reponse: Reponse) {
    this.selectedReponse = Object.assign({}, Reponse);
    this.child.update = true;
    this.child?.showreponseModal();
  }

  //TO DOOOOO
  deletereponseRequest(Reponse: Reponse, ind: number) {
    this.ReponseService.delete(Reponse).subscribe(
      () => {
        this.Reponses.splice(ind, 1);
      },
      (err) => {
        this.errorMessage = "Error ,Couldn't delete ";
        console.log(err);
      }
    );
  }

  goToThread() {
   // this.router.navigate([], { relativeTo: "/Forum" });
  }
}

import { Component, OnInit } from '@angular/core';
import { Equipe } from 'app/models/Equipe';
import { EquipeService } from 'app/Services/ServicesEquipes/equipe.service';
import {faFilm} from '@fortawesome/free-solid-svg-icons';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.scss']
})
export class EquipesComponent implements OnInit {
equipes:any;
  equipe : Equipe=new Equipe();
  equipe2:any;
  constructor(private equipeService:EquipeService,    private route: ActivatedRoute,
  ) { }
  isupdated = false;
    failed = false;
    isLoading = true;
  ngOnInit(): void {

    this.equipeService
        .getEquipe(this.route.snapshot.params.id)
        .subscribe(
            equipe => {
              this.equipe2 = equipe;

              this.equipe2.image = `http://localhost:8083/kaddem/images/${this
                  .equipe2 && this.equipe2.image}`;

              this.failed = false;
              this.isLoading = false;
            },
            err => {
              this.failed = true;
              this.isLoading = false;
            }
        );

    this.equipeService.findAllEquipes().subscribe(data => {
      this.equipes = data;
    });
  }
    onError() {
        this.equipe2.image = "/assets/img/equipe.jpg";
    }

  updateEquipe(id: number){
    this.equipeService.getEquipe(id)
        .subscribe(
            data => {

              this.equipes=data
            },
            error => console.log(error));
  }

  equipeUpdateForm=new FormGroup({
    idEquipe:new FormControl(),
    nomEquipe:new FormControl(),

  });

  updateEq(updateEq){
    this.equipe=new Equipe();
    this.equipe.idEquipe=this.EquipeId.value;
    this.equipe.nomEquipe=this.EquipeNom.value;




    this.equipeService.updateEquipe(this.equipe.idEquipe,this.equipe).subscribe(
        data => {
          this.isupdated=true;
          this.equipeService.findAllEquipes().subscribe(data =>{
            this.equipes =data
          })
        },
        error => console.log(error));
  }

  get EquipeId(){
    return this.equipeUpdateForm.get('idEquipe');
  }
  get EquipeNom(){
    return this.equipeUpdateForm.get('nomEquipe');
  }
  changeisUpdate(){
    this.isupdated=false;
  }

}

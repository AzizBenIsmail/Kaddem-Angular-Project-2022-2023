import { Component, OnInit } from '@angular/core';
import {EquipeService} from '../../../Services/ServicesEquipes/equipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {Equipe} from '../../../models/Equipe';

@Component({
  selector: 'app-detail-equipe',
  templateUrl: './detail-equipe.component.html',
  styleUrls: ['./detail-equipe.component.scss']
})
export class DetailEquipeComponent implements OnInit {

  equipe: any;

  isLoading = true;
  failed = false;
  constructor(
      private equipeService: EquipeService,
      private route: ActivatedRoute,
      private router: Router,
      public dialog: MatDialog
  ) {}
//http://localhost:8083/kaddem/images/2.jpg
  ngOnInit() {
    this.equipeService
        .getEquipe(this.route.snapshot.params.id)
        .subscribe(
            equipe => {
              this.equipe = equipe;
console.log(this.equipe.image)
              this.equipe.image = `http://localhost:8083/kaddem/images/${this
                  .equipe.image }`;

              this.failed = false;
              this.isLoading = false;
            },
            err => {
              this.failed = true;
              this.isLoading = false;
            }
        );
  }
  onError() {
    this.equipe.image = "/assets/img/equipe.jpg";
  }


}

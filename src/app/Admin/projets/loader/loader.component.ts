import { Component, OnInit } from '@angular/core';
import { ProjetService } from 'app/Services/ProjetService/projet.service';
import { TacheService } from 'app/Services/TacheService/tache.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
loader :boolean;
  constructor( private servicep:TacheService) {
    this.servicep.loader.subscribe(res=>{
      this.loader=res;
    })
   }

  ngOnInit(): void {
  }

}

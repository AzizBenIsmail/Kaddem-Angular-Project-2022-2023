import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Projet } from "app/models/Projet";
import { ProjetService } from "app/Services/ProjetService/projet.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjetResolver implements Resolve<Projet[]> {
  constructor(private projets: ProjetService) {}
  resolve(): Observable<Projet[]> {
    console.log("route resolver");
  
    return this.projets.getProjets(0,30);
   
  }
}
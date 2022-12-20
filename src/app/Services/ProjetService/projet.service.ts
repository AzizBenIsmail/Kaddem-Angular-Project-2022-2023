import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projet } from 'app/models/Projet';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {



  private getUrl: string= "http://localhost:8083/kaddem/Projet/";
  constructor(private _httpClient: HttpClient) { }
 
  getProjets(pageNumber : number, size: number): Observable<Projet[]> {
  
    console.log("get projets from projetService puis associer le  resolver à la route")
    return this._httpClient.get<Projet[]>(this.getUrl+"findAllProjets/"+pageNumber+"/"+size).pipe(
      map(response => response)
    )
  }

  saveProjet(projet: Projet): Observable<Projet> {
    return this._httpClient.post<Projet>(this.getUrl+"addProjet", projet);
  }

  suppressionAuto(): Observable<Number> {
    return this._httpClient.get<Number>(this.getUrl+"suppressionAutomatique");
  }


 


  updateProjet(projet: Projet , idProjet: number): Observable<Projet> {

 
    return this._httpClient.put<Projet>(this.getUrl+"updateProjet/"+idProjet, projet);
  }

  getProjet(id: number): Observable<Projet> {
    return this._httpClient.get<Projet>(`${this.getUrl+"findProjectById"}/${id}`).pipe(
      map(response => response)
    )
  }


  getProjetByName(nom: String): Observable<Projet> {
    return this._httpClient.get<Projet>(`${this.getUrl+"findProjectByName"}/${nom}`).pipe(
      map(response => response)
    )
  }


  
 deleteProjet(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl+"deleteProjetbyId"}/${id}`, {responseType: 'text'});
  }
}
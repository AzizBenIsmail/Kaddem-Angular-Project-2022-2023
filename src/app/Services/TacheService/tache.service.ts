import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tache } from 'app/models/Tache';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TacheService {
  private getUrl: string= "http://localhost:8083/kaddem/Tache/";
  
  constructor(private _httpClient: HttpClient) { }
  loader= new BehaviorSubject<boolean>(true);
  getTaches(): Observable<Tache[]> {
    return this._httpClient.get<Tache[]>(this.getUrl+"findAllTaches/").pipe(
      map(response => response)
    )
  }

  saveTache(tache: Tache,idProjet: number): Observable<Tache> {
    return this._httpClient.post<Tache>(this.getUrl+"addTache/"+idProjet+"/5", tache);
  }


  updateTache(tache: Tache): Observable<Tache> {
    return this._httpClient.put<Tache>(this.getUrl+"updateTache", tache);
  }


  saveTaches(taches: Tache[],idProjet: number): Observable<Tache> {
   // getUrl+"updateProjet/"+idProjet, projet);
    return this._httpClient.post<Tache>(this.getUrl+"addTaches/"+idProjet+"/5", taches);
  }



  getTache(idTache: number): Observable<Tache> {
    return this._httpClient.get<Tache>(`${this.getUrl+"findTacheById"}/${idTache}`).pipe(
      map(response => response)
    )
  }


  getTacheByName(descriptionTache: String): Observable<Tache> {
    return this._httpClient.get<Tache>(`${this.getUrl+"findTacheByNom"}/${descriptionTache}`).pipe(
      map(response => response)
    )
  }






  deleteTache(idTache: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl+"deleteTacheById"}/${idTache}`, {responseType: 'text'});
  }

 


  getTachesByProjet(idProjet: number): Observable<Tache[]> {
    return this._httpClient.get<Tache[]>(`${this.getUrl+"findTachesByProjet"}/${idProjet}`).pipe(
      map(response => response)
    )
  }

  getTachesByNameProjet(nom: String): Observable<Tache[]> {
    return this._httpClient.get<Tache[]>(`${this.getUrl+"findTachesByNameProjet"}/${nom}`).pipe(
      map(response => response)
    )
  }


}
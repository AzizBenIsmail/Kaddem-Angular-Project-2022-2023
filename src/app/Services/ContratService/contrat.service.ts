import { Injectable } from '@angular/core';
import {Contrat} from "../../models/Contrat";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Projet} from "../../models/Projet";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  contrats:Contrat[]=[];
  url=environment.baseUrl+'Contrat/';

  constructor(private http: HttpClient) { }

  /********************************Add Contrat************************************/
  saveContrat(contrat: Contrat):Observable<Contrat>{
    return this.http.post<Contrat>(this.url +'addContrat', contrat);
  }

  /********************************Delete Contrat************************************/
  deleteContrat(id:number):Observable<any>{
    return this.http.delete(`${this.url+"deleteById"}/${id}`, {responseType: 'text'});
  }

  /********************************Get Contrats************************************/
  getAllContrats(request): Observable<Contrat[]>{
    const params= request;
    return this.http.get<Contrat[]>(this.url+'listeContrats/', {params})  }

  /********************************Update Contrat************************************/
  updateContrat(id:number, d:any):Observable<any>{
    return this.http.put(`${this.url+"updateContrat"}/${id}`, {responseType: 'text'}, d)
  }

  /********************************Get Contrats Non Archives************************************/
  getAllContratsNonArchives(): Observable<Contrat[]>{
    return this.http.get<Contrat[]>(this.url+'listeContratsNonArchives/')  }

  /********************************Get Contrats Archives************************************/
  getAllContratsArchives(): Observable<Contrat[]>{
    return this.http.get<Contrat[]>(this.url+'listeContratsArchives/')  }
}


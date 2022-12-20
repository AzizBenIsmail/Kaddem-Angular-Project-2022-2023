import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Reclamation} from "../../models/Reclamation";
import {Observable} from "rxjs";
import {Contrat} from '../../models/Contrat';

@Injectable({
  providedIn: 'root'
})
export class ReclaimService {
  url=environment.baseUrl+'Reclamation/'
  constructor(private http:HttpClient) { }

  /********************************List Reclaims************************************/
  ListOfReclaims(request):Observable<Reclamation[]>{
    const params= request;
    return this.http.get<Reclamation[]>(this.url+'listeReclamations/',{params})
  }

  /********************************Delete Reclaims************************************/
  deleteReclaim(id:number):Observable<any>{
    return this.http.delete(`${this.url+"deleteByIdRec"}/${id}`, {responseType: 'text'});
  }

    /********************************Update Reclaim************************************/
    updateReclaim(id:number, d:any):Observable<any>{
        return this.http.put(`${this.url+"updateRec"}/${id}`, {responseType: 'text'}, d)
    }

  /********************************Add Reclaim************************************/
  saveReclamation(rec: Reclamation):Observable<Reclamation>{
    return this.http.post<Reclamation>(this.url +'addRec', rec);
  }

  /********************************Liste Reclamations Traitees************************************/
  ListOfNTReclaims():Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.url+'listeReclamationsNonTraitees/')
  }

  /********************************Liste Reclamations Non Traitees************************************/
  ListOfTReclaims():Observable<Reclamation[]>{
    return this.http.get<Reclamation[]>(this.url+'listeReclamationsTraitees/')
  }
  /********************************Traiter Reclamation************************************/
  TraiterRec(id:number, f:any):Observable<any>{
    return this.http.put(`${this.url+"RecTrue"}/${id}`, {responseType: 'text'});
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reponse } from 'app/models/Reponse';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
const API_URL = `${environment.baseUrl}`;
const URL = API_URL +'Reponse'

@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  constructor(private http:HttpClient) {
   }
   create(reponse : Reponse): Observable<Reponse>{
    return this.http.post<Reponse>(URL+'/AddReponse',reponse)
   }
   update(reponse : Reponse): Observable<Reponse>{
    return this.http.post<Reponse>(URL+'/updateReponse',reponse)
   }
   findAll(): Observable<Reponse[]>{
    
    return this.http.get<Reponse[]>(URL+'/')
   }
   getById(id: number): Observable<Reponse>{
    return this.http.get<Reponse>(URL+'/'+id)
   }
   delete(reponse : Reponse): Observable<Reponse>{
    return this.http.get<Reponse>(URL+'/deleteReponse/'+reponse.id)
   }
   
   reponsebythread(id : number): Observable<Reponse[]>{
    
    return this.http.get<Reponse[]>(URL+'/thread/'+id)
   }
}

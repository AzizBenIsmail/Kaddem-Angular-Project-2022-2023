import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Universite } from 'app/models/Universite';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversiteserviceService {
  private UniversiteAdminUrl: string;
 

  constructor(private http: HttpClient) {
    this.UniversiteAdminUrl=environment.baseUrl+"Universite/"
   }
   public findAllUniversite(): Observable<Universite> {
    return this.http.get<Universite>(this.UniversiteAdminUrl+"All");
   
  }

  public save( universite: Universite) {
    return this.http.post<Universite>(this.UniversiteAdminUrl+"addUniversite/", universite);
  }
//http://localhost:8083/kaddem/Universite/updateUniversite/3
  updateUniversite(id: number, value: any){
    return this.http.put(`http://localhost:8083/kaddem/Universite/updateUniversite/${id}`, value);
  }

  getUniversite(id: number): Observable<Universite> {
    return this.http.get<Universite>(this.UniversiteAdminUrl+"findUniversiteById?id="+id);
  
  }
  deleteUniversite(id:number):Observable<Object>{
    return this.http.delete(`http://localhost:8083/kaddem/Universite/deleteUniversite/${id}`);
  }


  updateU(id: number, value: any): Observable<Universite> {
    //http://localhost:8083/kaddem/Universite/updateU/10
    return this.http.put<Universite>(`http://localhost:8083/kaddem/Universite/updateU/${id}`, value);
  }


}

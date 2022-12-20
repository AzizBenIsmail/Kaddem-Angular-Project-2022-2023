import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departement } from 'app/models/Departement';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementserviceService {
  private DepartementeAdminUrl: string;

  constructor(private http: HttpClient) {
    this.DepartementeAdminUrl=environment.baseUrl+"Departement/"
   }

   public findAllDepartement(): Observable<Departement> {
    return this.http.get<Departement>(this.DepartementeAdminUrl+"findAllDepartments");
  }

  public save( departement: Departement) {
    return this.http.post<Departement>(this.DepartementeAdminUrl+"addDepartment/", departement);
  }

  
  updateDepartement(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8083/kaddem/Departement/updateDepartment/${id}`, value);
  }

  getDepartement(id: number): Observable<Object> {
    return this.http.get(`${this.DepartementeAdminUrl}findDepartmentById/${id}`);
  }
  deleteDepartement(id:number):Observable<Object>{
    return this.http.delete(`http://localhost:8083/kaddem/Departement/deleteDepartmentbyId?id=${id}`);
  }

}

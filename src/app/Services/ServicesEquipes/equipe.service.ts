import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from 'app/models/Equipe';
import {catchError, delay, Observable, of, retry, throwError} from 'rxjs';
//import { getSystemErrorMap } from 'util'; 
import {NgForm} from '@angular/forms';
import { map } from 'rxjs/operators';
//import * as http from 'http';
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
const equipesUrls = {

  post: "http://localhost:8083/kaddem/equipe/",

};
@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private equipeAdminUrl: string;


  constructor(private http: HttpClient) { 
this.equipeAdminUrl="http://localhost:8083/kaddem/equipe"

  }
  public findAllEquipes(): Observable<Equipe> {
  
    return this.http.get<Equipe>(this.equipeAdminUrl+"/All");
    
  }
  private existingnomEquipes = ['Produit300', 'Superman', 'Joker', 'Luthor'];

//@RequestParam String salle, @RequestParam String thematique, @RequestParam Integer nombreMaxParticipants, @RequestParam(name = "image",required = false) MultipartFile file
  public save(body:any) {
    return this.http.post("http://localhost:8083/kaddem/equipe/AddEquipe2",body);
  }
  // return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  postEquipe(body: any) :Observable<any>{
    console.log(body)
    return this.http
        .post(equipesUrls.post, body)
        .pipe(retry(1), catchError(this.handleError));
  }
  createEquipeWithFileUpload(formdata: any) {
    return this.http
        .post(equipesUrls.post, formdata)
        .pipe(retry(1), catchError(this.handleError));
  }
  handleError(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


  updateEquipe(id: number, value: any): Observable<Object> {
    return this.http.put(`http://localhost:8083/kaddem/equipe/updateEquipe/${id}`, value);
  }

  getEquipe(id: number): Observable<Object> {
    //http://localhost:8083/kaddem/equipe/equipe/1
    //http://localhost:8083/kaddem/equipe/equipe/168
    return this.http.get(`${this.equipeAdminUrl}/equipe/${id}`);
  }
  deleteEquipe(id:number):Observable<Object>{
 //   http://localhost:8083/kaddem/equipe/deleteEquipe/13
    return this.http.delete(`http://localhost:8083/kaddem/equipe/deleteEquipe/${id}`);
  }

  changeValidite(id:number):Observable<Object>{
    //   http://localhost:8083/kaddem/equipe/deleteEquipe/13


    return this.http.get(`http://localhost:8083/kaddem/equipe/changeV/${id}`);
  }


listesNonactivées(){
    return this.http.get(`http://localhost:8083/kaddem/equipe/nbEquipesDesactives`)
}
equipesActivées(){
    return this.http.get(`http://localhost:8083/kaddem/equipe/nbEquipesActives`)
}
nbMembresParEquipe(id:number):Observable<Object>{
    return this.http.get(`http://localhost:8083/kaddem/equipe/nbMembresParEquipes/${id}`)
}
  nbMembres():Observable<Object>{
    return this.http.get(`http://localhost:8083/kaddem/equipe/nbMembresEquipes`)
  }
  nbEquipes():Observable<Object>{
    return this.http.get(`http://localhost:8083/kaddem/equipe/nbEquipes`)
  }
getEtudiants():Observable<any>{
    return this.http.get(
        `http://localhost:8083/kaddem/equipe/getEtudiantsNonResponsables`
        // `http://localhost:8083/kaddem/Etudiant/`
    )
}
  getAllEtudiants():Observable<any>{
    return this.http.get(
        // `http://localhost:8083/kaddem/equipe/getEtudiantsNonResponsables`
        `http://localhost:8083/kaddem/Etudiant/`
    )
  }
  sendMailToAdminDev(formdata: any) {
    return this.http
        .post("http://localhost:8083/kaddem/equipe/SendMessageToAdminOfEquipes/", formdata)
        // .pipe(retry(1), catchError(this.handleError));
  }
  addPushSubscriber(sub:any) {
    return this.http.post('/api/notifications', sub);
  }

  send() {
    return this.http.post('/api/newsletter', null);
  }
  getMembersEquipe(id:any){
    return this.http.get("http://localhost:8083/kaddem/equipe/getMembers/"+id)
  }
  deleteEtudiantFromEquipe(idEt:any,idEq){
    return this.http.get("http://localhost:8083/kaddem/equipe/supprimerEtudiantFromEquipe/"+idEt+"/"+idEq)
  }
  deleteEtudiantPartielleFromEquipe(idet:any){
    return this.http.post(`http://localhost:8083/kaddem/equipe/deleteEtudiantFromEquipe/`+idet,null);
  }
  rajouterEtudiantToEquipe(idet:any){
    return this.http.post(`http://localhost:8083/kaddem/equipe/ValiderEtudiant/`+idet,null);
  }
  ajouterMembreToEquipe(idEq:number,idEt:number){
    return this.http.put("http://localhost:8083/kaddem/equipe/ajouterMembreEquipe/"+idEq+"/"+idEt,null)
  }


  getAll(request): Observable<any> {
    const params = request;
    return this.http.get("http://localhost:8083/kaddem/equipe/getEquipeList/", {params});
  }
  //http://localhost:8083/kaddem/equipe/download
  donloadExcel(){

    return this.http.get("http://localhost:8083/kaddem/equipe/download",{
        //responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
      responseType:  'blob',
    });
  }


//  protected get<T>(url: string, params: any, defaultResult: T): Observable<any> {
//         return this.httpClient.get(url, {
//         headers: myHeader,
//         params: params,
//         responseType: 'blob'
//     })
//       .pipe(catchError(this.handleError(defaultResult))
//       );
}

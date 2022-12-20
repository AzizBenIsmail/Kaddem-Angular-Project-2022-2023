import { map, Observable } from "rxjs";
import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Thread } from "app/models/Thread";
const API_URL = `${environment.baseUrl}`;
const URL = API_URL + "Thread";
const httpOptions = {
  headers: new HttpHeaders({
    Accept: "application/json",
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: "root",
})
export class ThreadService {
  constructor(private http: HttpClient) {}
  create(thread: Thread): Observable<Thread> {
    return this.http.post<Thread>(URL + "/AddThread", thread);
  }

  update(thread: Thread): Observable<Thread> {
    return this.http.post<Thread>(URL + "/updateThread", thread);
  }
  findAll(): Observable<Thread[]> {
    return this.http.get<Thread[]>(URL + "/");
  }
  getById(id: number): Observable<Thread> {
    return this.http.get<Thread>(URL + "/" + id);
  }
  delete(thread: Thread): Observable<Thread> {
    return this.http.get<Thread>(URL + "/deleteThread/" + thread.id);
  }

  verifIfLiked(idt: number, ide: number): Observable<Boolean> {
    return this.http.get<Boolean>(URL + "/like/" + idt + "/" + ide);
  }
  addLike(id: number, ide: number): Observable<Thread> {
    return this.http.get<Thread>(URL + "/like2/" + id + "/" + ide);
  }
}

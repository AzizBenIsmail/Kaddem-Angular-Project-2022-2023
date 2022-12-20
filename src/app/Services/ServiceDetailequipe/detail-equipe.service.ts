import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailEquipeService {
  private equipeAdminUrl: string;
  constructor(private http: HttpClient) {
    this.equipeAdminUrl="http://localhost:8083/kaddem/equipe"
  }
}

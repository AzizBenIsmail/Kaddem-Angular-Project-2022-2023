import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProjetService } from "app/Services/ProjetService/projet.service";
import { TacheService } from "app/Services/TacheService/tache.service";
import { Observable, tap } from "rxjs";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor{
   constructor(private servicep:TacheService){

   }
   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     return next.handle(req).pipe(
        tap(event => {
            this.servicep.loader.next(true);
            if(event.type==HttpEventType.Response){
                if(event.status==200)
                this.servicep.loader.next(false);
            }
        })
     )
   } 
}
import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm} from '@angular/forms';
import {Universite} from '../../../models/Universite';
import {UniversiteserviceService} from '../../../Services/ServicesUniversite/universiteservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Projet} from '../../../models/Projet';

@Component({
    selector: 'app-updateuniversite',
    templateUrl: './updateuniversite.component.html',
    styleUrls: ['./updateuniversite.component.scss']
})
export class UpdateuniversiteComponent implements OnInit {

    universites: Universite[] = [];
    universite: Universite=new Universite();


    constructor(private universiteservice: UniversiteserviceService,private _routerUp: Router ,  private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {


        const isIdPresent = this._activatedRoute.snapshot.paramMap.has('idUniversite');
        console.log(isIdPresent);
        if (isIdPresent) {
            const id = +this._activatedRoute.snapshot.paramMap.get('idUniversite');
           
            this.universiteservice.getUniversite(id).subscribe(
                data => {
                    console.log("test");
                 this.universite= data;
                    console.log(this.universite);
                })
        }

    }
    enregistrerUniversite(f: NgForm) {
        const id = +this._activatedRoute.snapshot.paramMap.get('idUniversite');
        this.universiteservice.updateU(id,this.universite).subscribe(
            data => {

                console.log('response', data);
                this._routerUp.navigate(['/Universite']);
            })
    }

    // enregistrerUniversite(data:any){
    //
    //     this.universiteservice.updateU(this.uni.idUniversite,data).subscribe(
    //         data => {
    //             console.log('response', data);
    //
    //
    //         })
    //
    // }
}

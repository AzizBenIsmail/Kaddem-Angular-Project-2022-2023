import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {UniversiteserviceService} from '../../../Services/ServicesUniversite/universiteservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DepartementserviceService} from '../../../Services/ServicesDepartement/departementservice.service';
import {Universite} from '../../../models/Universite';
import {Departement} from '../../../models/Departement';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.scss']
})
export class AddDepartementComponent implements OnInit {

  departements: Departement[] = [];
  departement: Departement = new Departement();

  constructor(private departementservice: DepartementserviceService, private _routerAdd: Router,
              private _activatedRoute: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  DepartementForm = new FormGroup({
    nomDepartement: new FormControl('',[Validators.required, Validators.minLength(3)]),
    nombre_classes: new FormControl(''),
    nombre_detage: new FormControl(''),
  });

  onSubmit() {
    this.departement=this.DepartementForm.value;
    this.departementservice.save(this.departement).subscribe(
        data => {
          console.log('response', data);
          this._routerAdd.navigateByUrl("Departement");
        })
    console.log(this.departement);
  }

}

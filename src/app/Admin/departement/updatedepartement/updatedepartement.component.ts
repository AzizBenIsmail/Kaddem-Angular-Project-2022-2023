import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DepartementserviceService} from '../../../Services/ServicesDepartement/departementservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Departement} from '../../../models/Departement';

@Component({
  selector: 'app-updatedepartement',
  templateUrl: './updatedepartement.component.html',
  styleUrls: ['./updatedepartement.component.scss']
})
export class UpdatedepartementComponent implements OnInit {


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
    const id = +this._activatedRoute.snapshot.paramMap.get('id');
    this.departement=this.DepartementForm.value;
    this.departementservice.updateDepartement(id,this.departement).subscribe(
        data => {
          console.log('response', data);
          this._routerAdd.navigateByUrl("Departement");
        })
    console.log(this.departement);
  }

}

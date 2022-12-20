import {Component, EventEmitter, Input, OnInit, Output, Type} from '@angular/core';
import {ContratService} from "../../../Services/ContratService/contrat.service";
import {Contrat} from "../../../models/Contrat";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Output() requested = new EventEmitter<any>();
  @Input()ctrct:any;
  contractForm: FormGroup;
  prixGroups:PrixGroup[]=[]

  constructor(private cService: ContratService, private _formBuilder:FormBuilder) { }

  ngOnInit(): void {


    this.contractForm = this._formBuilder.group({
      dateDebutC: ['', Validators.required],
      dateFinC: ['', Validators.required],
      specailite: ['', Validators.required],
      montantC: ['', Validators.required],
    })

    this.prixGroups= [
      {
        name: 'Prix/Trimestre',
        pokemon: [
          {value: '1600', viewValue: '1600 DT'},
        ],
      },
      {
        name: 'Prix/Semestre',
        pokemon: [
          {value: '3600', viewValue: '3600 DT'},
        ],
      },
      {
        name: 'Prix/Année',
        pokemon: [
          {value: '7500', viewValue: '7500 DT'},
        ],
      },
    ];

  }

  specialites: Specialite[] = [
    {value: 'IA', viewValue: 'IA'},
    {value: 'RESEAU', viewValue: 'RESEAU'},
    {value: 'CLOUD', viewValue: 'CLOUD'},
    {value: 'SECURITE', viewValue: 'SECURITE'},
    {value: 'WEB', viewValue: 'WEB'},
  ];

  updateContract(c:Contrat){
    console.log(this.ctrct.idContrat)
    this.cService.updateContrat(this.ctrct.idContrat, c).subscribe((data)=>{
      console.log(data)
    })
  }
}
interface Specialite {
  value: string;
  viewValue: string;
}
interface Pokemon {
  value: string;
  viewValue: string;
}

interface PrixGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}

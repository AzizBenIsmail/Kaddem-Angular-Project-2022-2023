import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'app/models/Projet';
import { ProjetService } from 'app/Services/ProjetService/projet.service';
import { map, Observable, startWith } from 'rxjs';


@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.scss']
})
export class AddProjetComponent implements OnInit {
  @Output()notif=new EventEmitter();
 
  myControl = new FormControl('');
  myForm: FormGroup;
  options: string[] = ['PIDEV', 'PFE', 'JEUXVIDEO'];
  filteredOptions: Observable<string[]>;
  projets: Projet[] = [];
  projet : Projet=new Projet();
  clicked : boolean = false;
  date:string;
  startDate: string;
  endDate: string;
  maxDate: string;
datePipe: DatePipe;
  constructor(private _projetService: ProjetService , private _routerAdd: Router,
    private _activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {


    

    }
   
  
  




  ngOnInit(): void {


  



    var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      
      
      this.date= yyyy + '-' + mm + '-' + dd;  

      this.filteredOptions = this.myControl.valueChanges.pipe(startWith(''),
        map(value => this._filter(value || '')),
      );


     this.myForm= this.formBuilder.group({

  

        nomProjet: ['', [Validators.required, Validators.minLength(3)]],
        dateDebutP: ['', Validators.required],
        dateFinP: ['', Validators.required],
        dureeProjet: ['', Validators.required],
        typeProjet:this.myControl
      });
  


  

  }


  onDateChange(): void {
    this.startDate = this.myForm.get('dateDebutP').value;
  
  }  



  get nomProjet(){
    return this.myForm.get('nomProjet');
  }

  get typeProjet(){
    return this.myForm.get('typeProjet');
  }
  get dateDebutP(){
    return this.myForm.get('dateDebutP');
  }
  get dateFinP(){
    return this.myForm.get('dateFinP');
  }
  get dureeProjet(){
    return this.myForm.get('dureeProjet');
  }






  enregistrerProjet(){
      
    this._projetService.saveProjet(this.myForm.value).subscribe(
      data => {
        console.log('response', data);
        this.notif.emit(this.myForm.value);
      // this.reloadComponent();
      })

  }

 

    addTache(){
      this.clicked = true;
    }


    activeNote: string;
enter(i) {
  this.activeNote = this.myForm.get('items').value;
}
     
private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().includes(filterValue));
}

reloadComponent() {
  this._routerAdd.routeReuseStrategy.shouldReuseRoute = () => false;
  this._routerAdd.onSameUrlNavigation = 'reload';
  this._routerAdd.navigate(['/Projets']);
}


  }

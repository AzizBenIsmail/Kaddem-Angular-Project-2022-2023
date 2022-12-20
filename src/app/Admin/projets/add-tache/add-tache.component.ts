import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'app/models/Projet';
import { Tache } from 'app/models/Tache';
import { ProjetService } from 'app/Services/ProjetService/projet.service';
import { TacheService } from 'app/Services/TacheService/tache.service';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.scss']
})
export class AddTacheComponent implements OnInit {

  @Input()projet:Projet;
  //taches: Tache[] = [];
  tache : Tache=new Tache();
  dynamicForm: FormGroup;
  submitted = false;
  //projet : Projet=new Projet();
  etatUn: boolean;
  etatDeux: boolean = true;
  etatTrois: boolean;
  
   constructor(private _TacheService: TacheService , private _projetService: ProjetService, private _routerAdd: Router,
    private _activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {
    
    }
    ngOnInit(): void {
      this.dynamicForm = this.formBuilder.group({
        numberOfTaches: ['', Validators.required],
        taches: new FormArray([])
    });
        
   
   
    
    



   }

   reloadComponent() {
    this._routerAdd.routeReuseStrategy.shouldReuseRoute = () => false;
    this._routerAdd.onSameUrlNavigation = 'reload';
    this._routerAdd.navigate(['/Projets']);
  }

  
    
   enregistrerTache(){
    this._TacheService.saveTaches( this.t.value,this.projet.idProjet).subscribe(
      data => {
        console.log('response', data);
        this.reloadComponent();
      })

   }
   get f() { return this.dynamicForm.controls; }
   get t() { return this.f.taches as FormArray; }
   get tacheFormGroups() { return this.t.controls as FormGroup[]; }

   onChangeTaches(e) {
       const numberOfTaches = e.target.value || 0;
       if (this.t.length < numberOfTaches) {
           for (let i = this.t.length; i < numberOfTaches; i++) {
               this.t.push(this.formBuilder.group({
                   descriptionTache: ['', [Validators.required,Validators.minLength(3)]],
                  etatTache: ['', Validators.required]
               }));
           }
       } else {
           for (let i = this.t.length; i >= numberOfTaches; i--) {
               this.t.removeAt(i);
           }
       }
   }

   onSubmit() {
       this.submitted = true;

       // stop here if form is invalid
       if (this.dynamicForm.invalid) {
           return;
       }

       // display form values on success
       alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4));
   }

   onReset() {
      
       this.submitted = false;
       this.dynamicForm.reset();
       this.t.clear();
   }

   onClear() {
      
       this.submitted = false;
       this.t.reset();
   }
}

  
 
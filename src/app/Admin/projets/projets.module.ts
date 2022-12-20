import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProjetsRoutingModule } from './projets-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NewDirectDirective } from './new-direct.directive';
import { ErrorsComponent } from './errors/errors.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatAutocompleteModule } from "@angular/material/autocomplete";


import { AddProjetComponent } from './add-projet/add-projet.component';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { GetProjetsComponent } from './get-projets/get-projets.component';
import { GetEtudiantByTacheComponent } from './get-etudiant-by-tache/get-etudiant-by-tache.component';
import { GetTachesComponent } from './get-taches/get-taches.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { UpdateTacheComponent } from './update-tache/update-tache.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CountdownModule } from "ng2-countdown-timer";
import { StatProjetsComponent } from './stat-projets/stat-projets.component';
import { StatTachesComponent } from './stat-taches/stat-taches.component';
import { HighlightDirective } from './highlight.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loaderIntercepter';
import { LoaderComponent } from './loader/loader.component';
import { SizerComponentComponent } from './sizer-component/sizer-component.component';












@NgModule({
  declarations: [
    
    NewDirectDirective,
    
    ErrorsComponent,
   StatProjetsComponent,
   StatTachesComponent,
    AddProjetComponent,
    AddTacheComponent,
    GetProjetsComponent,
    GetEtudiantByTacheComponent,
    GetTachesComponent,
    UpdateProjetComponent,
    UpdateTacheComponent,
    HighlightDirective,
    LoaderComponent,
    SizerComponentComponent
    
    
    ],
  imports: [
    CommonModule,
    ProjetsRoutingModule,
    FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        DragDropModule,
     MatInputModule,
    NgxPaginationModule,
    CountdownModule,
    MatProgressSpinnerModule
   
 
        
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
})
export class ProjetsModule { }

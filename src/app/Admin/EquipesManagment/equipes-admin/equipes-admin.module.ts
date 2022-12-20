import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipesAdminRoutingModule } from './equipes-admin-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {EquipesAdminManagmentComponent} from '../equipes-admin-managment/equipes-admin-managment.component';
import {AddEquipeComponent} from '../add-equipe/add-equipe.component';
import {CreateEquipeComponent} from '../createEquipe/create-equipe/create-equipe.component';
import {EquipesComponent} from '../../equipes/equipes.component';
import {DetailEquipe} from '../../../models/DetailEquipe';
import {DetailEquipeComponent} from '../detail-equipe/detail-equipe.component';
import {MembersEquipesComponent} from '../members-equipes/members-equipes.component';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {ModalModule} from 'ngx-bootstrap/modal';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ContactAdminDevEquipesComponent} from '../contact-admin-dev-equipes/contact-admin-dev-equipes.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ErrorsComponent} from '../errors/errors/errors.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {ExportExcelComponent} from '../export-excel/export-excel.component';
import {CreateEquipeChildComponent} from '../create-equipe-child/create-equipe-child.component';


@NgModule({
  declarations: [
      MembersEquipesComponent,
      CreateEquipeComponent,
      EquipesAdminManagmentComponent,
      ContactAdminDevEquipesComponent,
      ErrorsComponent,
      ExportExcelComponent,
      CreateEquipeChildComponent

  ],
    imports: [
        CKEditorModule,
        MatCardModule,
        ModalModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule,
        CommonModule,
        EquipesAdminRoutingModule,
        MatTooltipModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatProgressSpinnerModule

    ],
  exports: [RouterModule]
})

export class EquipesAdminModule { }

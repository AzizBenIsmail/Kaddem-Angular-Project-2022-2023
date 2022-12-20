import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratRoutingModule } from './contrat-routing.module';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AdminLayoutModule} from "../../layouts/admin-layout/admin-layout.module";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatChipsModule} from "@angular/material/chips";
import {MatDatepicker, MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {ListOfContratsComponent} from "./list-of-contrats/list-of-contrats.component";
import {NgxPaginationModule} from "ngx-pagination";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRadioModule} from "@angular/material/radio";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import { AddComponent } from './add/add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { UpdateComponent } from './update/update.component';
import { FilterPipe } from './Pipes/filter.pipe';



@NgModule({
  declarations: [

      ListOfContratsComponent,
      AddComponent,
      ConfirmationDialogComponent,
      UpdateComponent,
      FilterPipe
  ],
    imports: [
        ContratRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatIconModule,
        MatButtonModule,
        AdminLayoutModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatChipsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDialogModule,
        MatTableModule,
        MatInputModule,
        NgxPaginationModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatButtonModule,
    ],
    providers:[
        MatDatepickerModule,
    ],
    exports:[
        MatButtonModule, MatDialogModule],
    entryComponents: [  ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
})
export class ContratModule{}

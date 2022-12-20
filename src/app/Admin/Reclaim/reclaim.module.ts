import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListOfReclaimsComponent} from "./list-of-reclaims/list-of-reclaims.component";
import {ReclaimRoutingModule} from "./reclaim-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AdminLayoutModule} from "../../layouts/admin-layout/admin-layout.module";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatChipsModule} from "@angular/material/chips";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatRadioModule} from "@angular/material/radio";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { AddReclaimComponent } from './add-reclaim/add-reclaim.component';
import { UpdateReclaimComponent } from './update-reclaim/update-reclaim.component';



@NgModule({
  declarations: [ListOfReclaimsComponent, AddReclaimComponent, UpdateReclaimComponent],
  imports: [
    ReclaimRoutingModule, CommonModule,
    HttpClientModule,
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
    MatSelectModule
  ]
})
export class ReclaimModule { }

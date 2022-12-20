import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversiteRoutingModule } from './universite-routing.module';
import { AllUniversiteComponent } from './all-universite/all-universite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { UpdateuniversiteComponent } from './updateuniversite/updateuniversite.component';

@NgModule({
  declarations: [
    AllUniversiteComponent,
    AddUniversiteComponent,
    UpdateuniversiteComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ]
})
export class UniversiteModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListOfContratsComponent} from "./list-of-contrats/list-of-contrats.component";
import {AddComponent} from "./add/add.component";
import {ConfirmationDialogComponent} from "./confirmation-dialog/confirmation-dialog.component";

const routes: Routes=[
  {path:"", component:ListOfContratsComponent},
    {path:"addP", component:AddComponent},
    {path:"dialog", component: ConfirmationDialogComponent}
]

@NgModule({
  imports: [CommonModule,
      RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class ContratRoutingModule { }

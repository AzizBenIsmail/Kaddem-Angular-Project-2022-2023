import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListOfReclaimsComponent} from "./list-of-reclaims/list-of-reclaims.component";
import {AddReclaimComponent} from "./add-reclaim/add-reclaim.component";

const routes : Routes=[
  {path:'',component:ListOfReclaimsComponent},
  {path:'addR', component:AddReclaimComponent}
    ]

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclaimRoutingModule { }

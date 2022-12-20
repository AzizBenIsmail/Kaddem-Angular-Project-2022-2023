import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailEquipeAdminMangmComponent} from '../detailEquipeAdmin/detail-equipe-admin-mangm/detail-equipe-admin-mangm.component';

const routes: Routes = [
  {path:'',component:DetailEquipeAdminMangmComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailEquipeAdminRoutingModule { }

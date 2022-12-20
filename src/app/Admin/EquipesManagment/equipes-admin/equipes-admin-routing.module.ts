import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EquipesAdminManagmentComponent} from '../equipes-admin-managment/equipes-admin-managment.component';
import {CreateEquipeComponent} from '../createEquipe/create-equipe/create-equipe.component';
import {MembersEquipesComponent} from '../members-equipes/members-equipes.component';
import {DetailEquipeComponent} from '../detail-equipe/detail-equipe.component';
import {AdminLayoutComponent} from '../../../layouts/admin-layout/admin-layout.component';
import {ContactAdminDevEquipesComponent} from '../contact-admin-dev-equipes/contact-admin-dev-equipes.component';
import {ErrorsComponent} from '../errors/errors/errors.component';
import {ExportExcelComponent} from '../export-excel/export-excel.component';
import {CreateEquipeChildComponent} from '../create-equipe-child/create-equipe-child.component';

const routes: Routes = [
{path:'', component:EquipesAdminManagmentComponent},
  {path:'addEquipe', component:CreateEquipeComponent},
    {path:'addEquipe2', component:CreateEquipeChildComponent},
    {path:'SendEmail', component:ContactAdminDevEquipesComponent},
  {path:'getEquipeById/:id', component:DetailEquipeComponent},
    {path:'errors', component:ErrorsComponent},
    {path:'PDFEXCEL',component:ExportExcelComponent},

    {path:'getMembers/:idEquipe', component:AdminLayoutComponent,children: [
     {path:'',component:MembersEquipesComponent}
   ]},
 //  {path:'getMembers/', component:MembersEquipesComponent},
//

];
/*
* {path: "Details",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
    import("./Admin/DetailEquipesManagement/detail-equipe-admin/detail-equipe-admin.module")
        .then((m) => m.DetailEquipeAdminModule),},],
  },*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipesAdminRoutingModule {

}


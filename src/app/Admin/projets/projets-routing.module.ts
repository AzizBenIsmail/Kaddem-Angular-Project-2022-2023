import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { GetProjetsComponent } from './get-projets/get-projets.component';
import { GetTachesComponent } from './get-taches/get-taches.component';
import { ProjetResolver } from './ProjetResolver';

import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { UpdateTacheComponent } from './update-tache/update-tache.component';



const routes: Routes = [

  { path: '', component: GetProjetsComponent , 
  resolve: {
    projets: ProjetResolver  
   // on associe un resolver à la route
  }},
  { path: 'add', component: AddProjetComponent },
 
  { path: 'update/:id', component: UpdateProjetComponent },
  { path: 'addTache/:id', component: AddTacheComponent },
  { path: 'getTaches/:id', component: GetTachesComponent },
  { path: 'updateTache/:id/:idP', component: UpdateTacheComponent }
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetsRoutingModule { }

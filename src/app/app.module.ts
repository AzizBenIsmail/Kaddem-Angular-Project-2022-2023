import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { EquipesComponent } from "./Admin/equipes/equipes.component";
import { EquipeService } from "./Services/ServicesEquipes/equipe.service";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AdminLayoutModule } from "./layouts/admin-layout/admin-layout.module";
import { ProjetService } from "./Services/ProjetService/projet.service";
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { MatChipsModule } from "@angular/material/chips";
import { EquipesAdminModule } from "./Admin/EquipesManagment/equipes-admin/equipes-admin.module";
import { EquipesAdminManagmentComponent } from "./Admin/EquipesManagment/equipes-admin-managment/equipes-admin-managment.component";
import { UpdateEquipeComponent } from "./Admin/EquipesManagment/update-equipe/update-equipe.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ConfirmDialogComponent } from "./Admin/EquipesManagment/confirm-dialog/confirm-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";
import { UniversiteModule } from './Admin/universite/universite.module'; 
// import { DetailEquipeAdminManagmentComponent } from "./Admin/EquipesManagment/detail-equipe-admin-managment/detail-equipe-admin-managment.component";
import { UniversiteserviceService } from "./Services/ServicesUniversite/universiteservice.service";
import { AddEquipeComponent } from "./Admin/EquipesManagment/add-equipe/add-equipe.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
 import { CreateThreadComponent } from "./Admin/Forum/Thread/create-thread/create-thread.component";
import { UpdateThreadComponent } from "./Admin/Forum/Thread/update-thread/update-thread.component";
import { ListThreadComponent } from "./Admin/Forum/Thread/list-thread/list-thread.component";
import { ContactAdminDevEquipesComponent } from "./Admin/EquipesManagment/contact-admin-dev-equipes/contact-admin-dev-equipes.component";
import { DetailsThreadComponent } from "./Admin/Forum/Thread/details-thread/details-thread.component";
import { ListReponseComponent } from "./Admin/Forum/Reponse/list-reponse/list-reponse.component";
import { CreateReponseComponent } from "./Admin/Forum/Reponse/create-reponse/create-reponse.component";
import { ForumComponent } from "./Admin/Forum/forum/forum.component";
import { ProjetsModule } from "./Admin/projets/projets.module";
import { CreateEquipeComponent } from "./Admin/EquipesManagment/createEquipe/create-equipe/create-equipe.component";
import { NotFoundComponent } from "./error/not-found/not-found.component";
import { MatCardModule } from "@angular/material/card";
import { DepartementModule } from "./Admin/departement/departement.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { TachesFrontComponent } from './taches-front/taches-front.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ContratModule } from './Admin/Contrat/contrat.module';
import { ReclaimModule } from './Admin/Reclaim/reclaim.module';


@NgModule({
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        EquipesComponent,
        // EquipesComponent,
        // EquipesAdminManagmentComponent,
        // UpdateEquipeComponent,
        // AddEquipeComponent,
        ConfirmDialogComponent,
        // DetailEquipeAdminManagmentComponent,
        CreateThreadComponent,
        UpdateThreadComponent,
        ListThreadComponent,
        // ContactAdminDevEquipesComponent,
        DetailsThreadComponent,
        ListReponseComponent,
        CreateReponseComponent,
        ForumComponent,
        // CreateEquipeComponent,
        NotFoundComponent,
        TachesFrontComponent
    ],  
    providers: [EquipeService, ProjetService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        MatIconModule,
        MatButtonModule,
        AdminLayoutModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatChipsModule,
        NgbModule,
        EquipesAdminModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDialogModule,
        MatTableModule,
        MatInputModule,
        UniversiteModule,
        ProjetsModule,
        MatCardModule,     
        ProjetsModule,  
        ModalModule,
        DepartementModule,
        MatTooltipModule,
        DragDropModule,
        ContratModule,
        ReclaimModule
    ]
})
export class AppModule {}

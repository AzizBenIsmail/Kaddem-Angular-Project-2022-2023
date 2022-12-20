import {Component, Inject, OnInit} from '@angular/core';
import {EquipeService} from '../../../Services/ServicesEquipes/equipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {EquipeValidator} from '../EquipeValidator/EquipeValidator';
import {catchError} from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {DOCUMENT} from '@angular/common';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-members-equipes',
  templateUrl: './members-equipes.component.html',
  styleUrls: ['./members-equipes.component.css']
})
export class MembersEquipesComponent implements OnInit {
    isHidden = false;
    isHidden2 = false;
    isHidden3 = false;
    idEt:any
    idEq:any;
    eq:any;
    nbMembreParEquipe:any
membres:any=[];
    eqs:any;
    idEtuFromEquipesentity:any=[]
allEtudiants:any=[]
    addMembreEquipeForm = this.fb.group({

        idEtudiant:["",Validators.required],

    });
  constructor(private  equipeService:EquipeService,private ac:ActivatedRoute,
              private fb: FormBuilder,
              private router: Router,
              @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {

      /** **************************************************/
      this.idEq=this.ac.snapshot.params["idEquipe"]


      this.equipeService.nbMembresParEquipe(this.idEq).subscribe(
          (nbM)=>{

              this.nbMembreParEquipe=nbM
          }
      )


      this.equipeService.getEquipe(this.idEq).subscribe(
          (res2)=>{
              this.eq=res2

          })












      /**  ***********************************************                      */
this.equipeService.getAllEtudiants().subscribe(
    (res:any)=>{
        this.allEtudiants=res
    }
)
  this.equipeService.findAllEquipes().subscribe(
      (res:any)=>{
         for(let i=0;i<res.length;i++){
            this.idEtuFromEquipesentity.push(res[i].etudiant.idE)
         }

      }

      )


      // for(let i=0;i<this.eqs.length;i++){
      //     this.idEtuFromEquipesentity.push(this.eqs[i].etudiant.idE)
      // }

    this.equipeService.getMembersEquipe(this.ac.snapshot.params["idEquipe"]).subscribe(
        (d)=> {
console.log("****************"+this.ac.snapshot.params["idEquipe"])
       console.log(d);

        this.membres=d
        }
    )
  }

    deleteEtudiantFromEquipe(idEt:any){
        if(confirm("Etes vous sure de supprimer definitivement  ce membre ?")) {
   let   idEq=this.ac.snapshot.params["idEquipe"]
      this.equipeService.deleteEtudiantFromEquipe(idEt,idEq).subscribe(
          ()=>{
        console.log("idEquipe"+idEq+" idEtudiant "+idEt)
          }
      )
            Swal.fire({
                title: 'Supprimer Membre!!',
                text:   "Membre Bien supprimé",
                icon: 'success',
                timer: 5000
            });
            this.refresh();
        }
    }
    deleteEtudiantPartielleFromEquipe(idEt:any){
        if(confirm("Etes vous sure de desactiver  ce membre ?")) {
        this.equipeService.deleteEtudiantPartielleFromEquipe(idEt).subscribe(
            ()=>{
                console.log( "idEtudiant "+idEt)
            }
        )
            Swal.fire({
                title: 'desactiver Membre!!',
                text:   "Membre Bien desactivé",
                icon: 'success',
                timer: 5000

            });
            this.refresh();
        }
    }
    rajouterEtudiantPartielleFromEquipe(idEt:any){
        if(confirm("Etes vous sure de rajouter  ce membre ?")) {
        this.equipeService.rajouterEtudiantToEquipe(idEt).subscribe(
            ()=>{
                console.log( "idEtudiant "+idEt)
            }
        )
            Swal.fire({
                title: 'Rajouter Membre!!',
                text:   "Membre Bien Rajouté",
                icon: 'success',
                timer: 10000
            });
            this.refresh();
        }
    }
    ajouterMembreEquipe(idEtu){
    let et:any
        et=this.allEtudiants

        let   idEq=this.ac.snapshot.params["idEquipe"]
        // return this.equipeService.ajouterMembreToEquipe(idEq,idEtu).subscribe(
        //     ()=>{
                console.log("etudiants:"+et)
                console.log(idEq)
            // }
        // )
    }



    onSubmit = () => {

        if (this.addMembreEquipeForm.valid) {
            // this.isLoading = true;
            // this.failed = false;

            const formdata: FormData = new FormData();

        let idEt:any
            let   idEq=this.ac.snapshot.params["idEquipe"]
           formdata.append("idEtudiant", this.addMembreEquipeForm.value.idEtudiant);
        console.log("******************"+idEt)

            this.equipeService.ajouterMembreToEquipe(idEq,this.addMembreEquipeForm.value.idEtudiant).subscribe(
                () => {




                })
            let eq:any
            let nbMembreParEquipe:any
this.equipeService.nbMembresParEquipe(idEq).subscribe(
    (nbM)=>{
  console.log("*********************"+nbM)
        nbMembreParEquipe=nbM
    }
)

            this.equipeService.getEquipe(idEq).subscribe(
                (res2)=>{
                    eq=res2
                    console.log("nombre maximal des membres"+eq.detailEquipe.nombreParticipants
                    )

               if(eq.etudiant.idE==this.addMembreEquipeForm.value.idEtudiant){
                   Swal.fire({
                       position: 'top-end',
                       icon: 'error',
                       title: "cet(te) etudiant(e) est deja un(e) responsable d'une equipe",
                       showConfirmButton: false,
                       timer: 3000
                   })
               }
               else if(nbMembreParEquipe<eq.detailEquipe.nombreParticipants) {
                   this.refresh()
                   Swal.fire({
                       position: 'top-end',
                       icon: 'success',
                       title: "Bien! Membre bien ajouté(e)",
                       showConfirmButton: false,
                       timer: 3000
                   })

               }
               else {
                   Swal.fire({
                       position: 'top-end',
                       icon: 'error',
                       title: "cette equipe n'accepte pas plus de :"+eq.detailEquipe.nombreParticipants,
                       showConfirmButton: false,
                       timer: 3000
                   })
               }
                }
            )

        }
        // catch()
        // {
        //     console.log("le responsable doit rejoindre unje seule equipe, L'etudiant nommé : ` Ahmed 1  ` est deja responsable d'une equipe")
        // }

    };


    refresh():void {
        this._document.defaultView.location.reload();
    }


    onSubmit2() {



        if (this.addMembreEquipeForm.valid) {


            const formdata: FormData = new FormData();


            formdata.append("idEtudiant", this.addMembreEquipeForm.value.idEtudiant);



            if (this.nbMembreParEquipe < this.eq.detailEquipe.nombreParticipants) {
                if (this.eq.etudiant.idE != this.addMembreEquipeForm.value.idEtudiant) {
                    this.equipeService.ajouterMembreToEquipe(this.idEq, this.addMembreEquipeForm.value.idEtudiant).subscribe(
                        () => {
                        })
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Bien! Membre bien ajouté(e)",
                        showConfirmButton: false,
                        timer: 5000
                    })

                    this.refresh()
                }

                    for(let i=0;i<this.idEtuFromEquipesentity.length;i++) {
                        console.log("mmmmmmm" + this.idEtuFromEquipesentity[i])
                        if (this.idEtuFromEquipesentity[i] == this.addMembreEquipeForm.value.idEtudiant) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'error',
                                title: "cet(te) etudiant(e) est deja un(e) responsable d'une equipe",
                                showConfirmButton: false,
                                timer: 5000
                            })
                        }

            }

        }

            else {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: "cette equipe n'accepte pas plus de :" + this.eq.detailEquipe.nombreParticipants,
                    showConfirmButton: false,
                    timer: 5000
                })
            }


    }
    }
    fileName='membres.xlsx'
    exportexcel():void{
        let element=document.getElementById('ExcelTable')
        const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element)
        const wb:XLSX.WorkBook=XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(wb,ws,'Sheet1')
        XLSX.writeFile(wb,this.fileName)
    }

    reloadComponent() {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/Equipes']);
    }

}

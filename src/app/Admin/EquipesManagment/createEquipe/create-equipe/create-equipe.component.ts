import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EquipeService} from '../../../../Services/ServicesEquipes/equipe.service';
import {Router} from '@angular/router';
import {delay, of} from 'rxjs';
import {EquipeValidator} from '../../EquipeValidator/EquipeValidator';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {DOCUMENT} from '@angular/common';
@Component({
  selector: 'app-create-equipe',
  templateUrl: './create-equipe.component.html',
  styleUrls: ['./create-equipe.component.scss']
})
export class CreateEquipeComponent implements OnInit {
  private existingnomEquipes = ['Produit300', 'Superman', 'Joker', 'Luthor'];
listeEquipes:any[];
  listeNomEquipes=[]

  failed = false;
  isLoading = false;
e:any;
nom:any;
listeEtudiants:any [];

  @ViewChild("inputImage", { static: false }) inputImage;

  createEquipeForm = this.fb.group({
    nomEquipe:  [
      null,
  [Validators.minLength(3), Validators.required],
  [EquipeValidator.createValidator(this)],
],
    salle: ["",  [Validators.minLength(3), Validators.required]],
    thematique: ["",  [Validators.minLength(3), Validators.required]],
    nombreMaxParticipants: ["",  [Validators.minLength(1), Validators.required]],
    idEtudiant:["",Validators.required],
    image: [null,Validators.required]
  });

  imageDataUrl: any = null;
  selected = 'option2';
  etu:any[];
  listeNoms:any;
  constructor(
      @Inject(DOCUMENT) private _document: Document,
      private fb: FormBuilder,
      private EquipeService: EquipeService,
      private router: Router

  ) {


  }

  ngOnInit() {

    this.EquipeService.findAllEquipes().subscribe((res: any) => {
      this.listeEquipes = res;
      for (let i = 0; i < this.listeEquipes.length; i++) {
        this.listeNomEquipes.push( this.listeEquipes[i].nomEquipe)
        console.log("22222222"+this.listeNomEquipes)

      }
    })

    this.EquipeService.getEtudiants().subscribe( etudiants=>{
      // console.log(etudiants)

this.listeEtudiants=etudiants

      })

// this.companyService.getCompanyList().subscribe(companyData => {
//     this.loadedCompanies = companyData.companies;
//   });

  }




  onUploadImageButtonClick() {
    this.inputImage.nativeElement.click();
  }

  onFileChange() {
    const target = this.inputImage.nativeElement;
    if (target.files && target.files.length) {
      const [file] = target.files;
      this.createEquipeForm.patchValue({
        image: file
      });
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = _event => {
        this.imageDataUrl = reader.result;
      };
    }
  }
  data2 = [];
  loaddata()
  {

    this.EquipeService.findAllEquipes().subscribe((res: any)=>{

      this.data2 = res;
    });
  }
  onSubmit = () => {
    console.log(this.createEquipeForm);
    if (this.createEquipeForm.valid) {
      this.isLoading = true;
      this.failed = false;

      const formdata: FormData = new FormData();

      formdata.append("nomEquipe", this.createEquipeForm.value.nomEquipe);

      formdata.append("image", this.createEquipeForm.value.image);
      formdata.append("salle", this.createEquipeForm.value.salle);
      formdata.append("thematique", this.createEquipeForm.value.thematique);
      formdata.append("nombreMaxParticipants", this.createEquipeForm.value.nombreMaxParticipants);
      formdata.append("idEtudiant", this.createEquipeForm.value.idEtudiant);

      formdata.append("image", this.createEquipeForm.value.image);
      this.EquipeService.createEquipeWithFileUpload(formdata).subscribe(
          () => {

            this.isLoading = false;
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Equipe bien ajoutée',
              showConfirmButton: false,
              timer: 3000
            })

//this.refresh()
  this.reloadComponent();
          },
          err => {
            this.isLoading = false;
            this.failed = true;
          }
      );
      this.reloadComponent();
    }

  };
  checkIfUsernameExists(value: string) {
    return of(this.listeNomEquipes.some((a) => a === value)).pipe(
        delay(1000)
    );
  }
  refresh():void {
    this._document.defaultView.location.reload();
  }


  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/Equipes']);
  }
}

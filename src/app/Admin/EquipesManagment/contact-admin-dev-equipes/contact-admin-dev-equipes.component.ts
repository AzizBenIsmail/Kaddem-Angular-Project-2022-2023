import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EquipeService} from '../../../Services/ServicesEquipes/equipe.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {DOCUMENT} from '@angular/common';
import {Router} from '@angular/router';
@Component({
  selector: 'app-contact-admin-dev-equipes',
  templateUrl: './contact-admin-dev-equipes.component.html',
  styleUrls: ['./contact-admin-dev-equipes.component.scss']
})
export class ContactAdminDevEquipesComponent implements OnInit {
  ckconfig = {
    toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
  };
  data="rrrrrrrrr"
  editor = ClassicEditor;
  public Editor = ClassicEditor;
  sendMailForm = this.fb.group({
    title: ["", [Validators.minLength(3), Validators.required]],
    body: ["",[ Validators.minLength(10), Validators.required]]
  });
  failed = false;
  isLoading = false;
  constructor( private fb: FormBuilder,
               private EquipeService: EquipeService,
               private router: Router,
               @Inject(DOCUMENT) private _document: Document
  ) { }

  ngOnInit(): void {
  }
  onSubmit = () => {

    if (this.sendMailForm.valid) {


      const formdata: FormData = new FormData();

      formdata.append("title", this.sendMailForm.value.title);

      formdata.append("body", this.sendMailForm.value.body);

      this.EquipeService.sendMailToAdminDev(formdata).subscribe(
          () => {
            Swal.fire({
              title: 'Mail',
              text:   "Mail bien envoyé",
              icon: 'success'

            });
            this.reloadComponent();
console.log("biennn")
            this.isLoading = false;
          },
          err => {
            this.isLoading = false;
            this.failed = true;
          }
      );
    }else{
      Swal.fire({
        title: 'Mail',
        text:   "Mail non envoyé",
        icon: 'error'
      });
    }
  };


  sendP(f:any){
    this.EquipeService.sendMailToAdminDev(f).subscribe(
        ()=>{console.log("ADDED !");
        }
    )
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

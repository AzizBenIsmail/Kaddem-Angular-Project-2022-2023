import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, NgForm} from '@angular/forms';
import {ProjetService} from '../../../Services/ProjetService/projet.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UniversiteserviceService} from '../../../Services/ServicesUniversite/universiteservice.service';
import {Projet} from '../../../models/Projet';
import {Universite} from '../../../models/Universite';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.scss']
})
export class AddUniversiteComponent implements OnInit {

  universites: Universite[] = [];
  universite: Universite = new Universite();

  constructor(private universiteservice: UniversiteserviceService, private _routerAdd: Router,
              private _activatedRoute: ActivatedRoute, private fb: FormBuilder, @Inject(DOCUMENT) private doc: Document) {
  }

  ngOnInit(): void {
  }

    refresh(): void {
        //this.showNotification('top', 'left');
        this.doc.defaultView.location.reload();
    }

  enregistrerUniversite(f: NgForm) {

    this.universiteservice.save(this.universite).subscribe(
        data => {
          console.log('response', data);
          this._routerAdd.navigateByUrl("Universite");
        })
// this.refresh();

  }
}

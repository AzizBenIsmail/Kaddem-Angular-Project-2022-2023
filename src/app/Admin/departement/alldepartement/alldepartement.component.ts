import {Component, Inject, OnInit} from '@angular/core';
import { DepartementserviceService } from 'app/Services/ServicesDepartement/departementservice.service';
import {Universite} from '../../../models/Universite';
import {MatTableDataSource} from '@angular/material/table';
import {Departement} from '../../../models/Departement';
import {DOCUMENT} from '@angular/common';
import Swal from 'sweetalert2/dist/sweetalert2.js';

declare var $: any;

@Component({
  selector: 'app-alldepartement',
  templateUrl: './alldepartement.component.html',
  styleUrls: ['./alldepartement.component.scss']
})
export class AlldepartementComponent implements OnInit {
    departements: any;
    dataSource = new MatTableDataSource<Departement>();

    constructor(private departementService: DepartementserviceService, @Inject(DOCUMENT) private doc: Document) {
    }

    ngOnInit(): void {
        this.departementService.findAllDepartement().subscribe(
            (d) => {
                console.log(d);
                this.departements = d;
            }
        )
    }


    refresh(): void {
        this.doc.defaultView.location.reload();
    }

    Supprimer(id: number) {
        this.departementService.deleteDepartement(id).subscribe(() => {
            console.log(id)
            this.dataSource.data = this.dataSource.data.filter(
                (departement: Departement) => departement.idDepartement !== id
            );
        });
    }

    confirmBox(idDepartement: any,nom: any) {
        Swal.fire({
            title: 'Are you sure want to remove : '+nom+' ?',
            text: 'You will not be able to recover this Universite!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                this.Supprimer(idDepartement);
                Swal.fire(
                    'Deleted!',
                    'Your imaginary Universite has been deleted.',
                    'success'
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelled',
                    'Your imaginary Universite is safe :)',
                    'error'
                )
            }
        })
    }
}

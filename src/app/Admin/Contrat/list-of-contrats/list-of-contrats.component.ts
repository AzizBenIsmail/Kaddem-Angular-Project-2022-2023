import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit} from '@angular/core';
import {formatDate} from "@angular/common";
import {Contrat} from "../../../models/Contrat";
import {ContratService} from "../../../Services/ContratService/contrat.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl } from '@angular/forms';
import {map, startWith} from "rxjs/operators";
import {combineLatest, filter, Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ConfirmDialogModel} from "../confirmation-dialog/confirmation-dialog.component";
import {ConfirmDialogComponent} from "../../EquipesManagment/confirm-dialog/confirm-dialog.component";
import {AddComponent} from "../add/add.component";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-list-of-contrats',
  templateUrl: './list-of-contrats.component.html',
  styleUrls: ['./list-of-contrats.component.scss']
})


export class ListOfContratsComponent implements OnInit {

  @NgModule({
    declarations: [ListOfContratsComponent],
    exports: [ListOfContratsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

  filterText: string='';

  fileNameDialogRef: MatDialogRef<AddComponent>;

  showUpdate=false;
  clickedAdd : boolean = false;
  contractBinding: any;

  searchText:string='';
  result: boolean;

  currentDate = new Date();
  cValue = formatDate(this.currentDate, 'dd-MM-yyyy', 'en-US');

  contrats: Contrat[]=[];
  CNA: Contrat[]=[];
  CA: Contrat[]=[];
  nbrp: number = 1;
  totalElements: any;
  pageIndex: any;
  pageSize: any;


  constructor(private router: Router,private serviceC: ContratService, private formBuilder: FormBuilder,
              private dialog: MatDialog) { }


  ngOnInit(): void {
    this.ListOfContrats({page:"0", size:"5"})
    this.ListOfContratsNA()
    this.ListOfContratsA()
  }
    generatePdf(f:any){
      console.log(f)
        const documentDefinition = {

          content: [

            { text: 'ESPRIT', style: 'header' },
            'Se former autrement',
            {
              text: 'Contrat de : Foulen Ben Foulen',
              style: 'subheader',
            },
            'Foulen Ben Foulen a signe un contrat de :',
            'IDENTIFIANT : 15215JFT2',
            {
              style: 'tableExample',
              table: {
                body: [
                  ['Specialite', 'Date Debut Contrat', 'Date Fin Contrat','Montant Du Contrat'],
                  [f.specailite,f.dateDebutC,f.dateFinC, f.montantC],
                ],
              },

            },{ text: 'Signature', style: 'header' },
            'Directeur general',
            'Lakhdher Taher'
          ],

          styles: {
            header: {
              fontSize: 18,
              bold: true,
              margin: [0, 0, 0, 10],
            },
            subheader: {
              fontSize: 16,
              bold: true,
              margin: [0, 10, 0, 5],
            },
            tableExample: {
              margin: [0, 5, 0, 15],
            },
          },
        };
        pdfMake.createPdf(documentDefinition).download('Contrat');
    }

  PrintPdf(f:any){
    const documentDefinition = {      content: [

        { text: 'ESPRIT', style: 'header' },
        'Se former autrement',
        {
          text: 'Contrat de : Foulen Ben Foulen',
          style: 'subheader',
        },
        'Foulen Ben Foulen a signe un contrat de :',
        'IDENTIFIANT : 15215JFT2',
        {
          style: 'tableExample',
          table: {
            body: [
              ['Specialite', 'Date Debut Contrat', 'Date Fin Contrat','Montant Du Contrat'],
              [f.specailite,f.dateDebutC,f.dateFinC, f.montantC],
            ],
          },

        },{ text: 'Signature', style: 'header' },
        'Directeur general',
        'Lakhdher Taher'
      ],

      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5],
        },
        tableExample: {
          margin: [0, 5, 0, 15],
        },
      },
    };
    pdfMake.createPdf(documentDefinition).print();
  }
  ExpandPdf(f:any){
    const documentDefinition = {      content: [

        { text: 'ESPRIT', style: 'header' },
        'Se former autrement',
        {
          text: 'Contrat de : Foulen Ben Foulen',
          style: 'subheader',
        },
        'Foulen Ben Foulen a signe un contrat de :',
        'IDENTIFIANT : 15215JFT2',
        {
          style: 'tableExample',
          table: {
            body: [
              ['Specialite', 'Date Debut Contrat', 'Date Fin Contrat','Montant Du Contrat'],
              [f.specailite,f.dateDebutC,f.dateFinC, f.montantC],
            ],
          },

        },{ text: 'Signature', style: 'header' },
        'Directeur general',
        'Lakhdher Taher'
      ],

      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5],
        },
        tableExample: {
          margin: [0, 5, 0, 15],
        },
      },
    };
    pdfMake.createPdf(documentDefinition).open({}, window);
  }
  showUpdateForm(f:any){
    this.contractBinding=f;
    this.showUpdate=true;
  }

  onCreate(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.width="25%";
    this.fileNameDialogRef = this.dialog.open(AddComponent, dialogConfig)
    //this.clickedAdd=true;
  }

  // openFileDialog(file?) {
  //
  //   this.fileNameDialogRef = this.dialog.open(AddComponent, {
  //     data: {
  //       dateDC: file ? file.dateDC:'',
  //       dateFC:file ? file.dateFC:'',
  //       specialite:file ? file.specialite:'',
  //       prix: file ? file.prix:''
  //     }
  //   });
  //
  //
  //   this.fileNameDialogRef.afterClosed().pipe(
  //       filter(specialite => specialite)
  //   ).subscribe(specailite => {
  //     if (file) {
  //       const index = this.contrats.findIndex(f => f.specailite == file.specialite);
  //       if (index !== -1) {
  //         this.contrats[index] = { specailite, content: file.content }
  //       }
  //     } else {
  //       this.contrats.push({ specailite, content: ''});
  //     }
  //   });
  // }
  $event: any;


  /*****************************SEARCH************************************/

  onSearchTextEntered(searchValue:string) {
    this.searchText = searchValue;
    console.log(this.searchText)
    console.log(this.pageSize)
  }


  /*****************************Liste Des Contrats********************************/
  ListOfContrats(request){
    this.serviceC.getAllContrats(request).subscribe((data)=>{
      this.contrats=data['content'];
      this.totalElements=data['totalElements']
      this.pageIndex = data['number']
      this.pageSize = data['size'];
    },error=>{
      console.log(error)
      this.router.navigate(['/errorPage'])
    });}
  /*****************************Liste Des Contrats Non Archives********************************/
  ListOfContratsNA(){
    this.serviceC.getAllContratsNonArchives().subscribe((data)=>{
      this.CNA=data;
    })
  }
  /*****************************Liste Des Contrats Archives********************************/
  ListOfContratsA(){
    this.serviceC.getAllContratsArchives().subscribe((data)=>{
      this.CA=data
    })
  }

  /*****************************Supprimer Contrat********************************/
  confirmDialog(id:any) {
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);


    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData, id
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log(dialogResult)
      if (this.result==true){
        this.serviceC.deleteContrat(id).subscribe((d)=>{
          this.ListOfContrats(null)
          console.log("done")
        })
      }
    });
  }


  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.ListOfContrats(request);
  }

  addContrat(c:Contrat) {
    this.contrats.push(c);
  }
}

import {AfterViewInit, Component, ElementRef, Inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Equipe, EquipeColumns} from '../../../models/Equipe';
import {EquipeService} from '../../../Services/ServicesEquipes/equipe.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddEquipeComponent} from '../add-equipe/add-equipe.component';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDirective, ModalModule} from 'ngx-bootstrap/modal';
import {Observable, Subject} from 'rxjs';
import {DetailEquipe} from '../../../models/DetailEquipe';
//npm install jspdf --save
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {DOCUMENT} from '@angular/common';
import DataTables from 'datatables.net';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {PageEvent} from '@angular/material/paginator';
import {CreateEquipeChildComponent} from '../create-equipe-child/create-equipe-child.component';
@Component({
  selector: 'app-equipes-admin-managment',
  templateUrl: './equipes-admin-managment.component.html',
  styleUrls: ['./equipes-admin-managment.component.css']
})
export class EquipesAdminManagmentComponent   {
    dtTrigger: Subject<any> = new Subject();
  @ViewChild('closebutton') closebutton;
    @ViewChild('htmlData') htmlData!: ElementRef;
    nombreListesNonActivees:number;
    nombreListesActivees:number;
    nombreMembreParEquipe:number;
    membres:any;
    nbEquipes:any;
    nombreP:number;
  niveau: any[] = [
      //JUNIOR,SENIOR,EXPERT
    {value: 'JUNIOR', viewValue: 'JUNIOR'},
    {value: 'SENIOR', viewValue: 'SENIOR'},
    {value: 'EXPERT', viewValue: 'EXPERT'},
  ];

  listEquipe:any;
text:String="";
 // @ViewChild(AddEquipeComponent) addview !:AddEquipeComponent

 // closeResult = '';
  displayedColumns: string[] = EquipeColumns.map((col) => col.key);
  columnsSchema: any = EquipeColumns;
  equipes:any;
  equipe : Equipe
  dataSource = new MatTableDataSource<Equipe>();
  valid: any = {};

  @ViewChild('largeModal') public largeModal:ModalDirective;
  isLoading = true;
  failed = false;
  e3:any;
    etu:any[];
  constructor(private equipeService:EquipeService,public dialog: MatDialog, private route: ActivatedRoute,
              private router: Router,
              @Inject(DOCUMENT) private _document: Document
             ) {
    this.equipe = new Equipe();
  }

  ngOnInit() {
      this.getEquipes2({ page: "0", size: "5" });
      this.equipeService.nbEquipes().subscribe( (res:any)=>{
          this.nbEquipes=res;
      } )

      this.equipeService.nbMembres().subscribe( (res:any)=>{
          this.membres=res;
      } )

// this.equipeService.getEtudiants().subscribe( (etudiants:any)=>{
//    // console.log(etudiants)
//     this.etu=etudiants;
//     for(let i=0;i<this.etu.length;i++){
//         console.log("***********1"+etudiants[i].nom)
//     }
// } )

this.equipeService.listesNonactivées().subscribe( (res:any)=>{
    this.nombreListesNonActivees=res;
} )
      this.equipeService.equipesActivées().subscribe( (res:any)=>{
          this.nombreListesActivees=res;
      } )


    this.equipeService
        .getEquipe(this.route.snapshot.params.id)
        .subscribe(
            equipe => {
              this.equipes = equipe;
              console.log(this.equipe.image)
              this.equipe.image = `http://localhost:8083/kaddem/images/${this
                  .equipe.image }`;

              this.failed = false;
              this.isLoading = false;
            },
            err => {
              this.failed = true;
              this.isLoading = false;
            }
        );

    this.equipeService.findAllEquipes().subscribe((res: any) => {
      this.dataSource.data = res;
   // console.log(this.dataSource.data)
        for(let e of this.dataSource.data){
            //
            // this.equipeService.nbMembresParEquipe(e.idEquipe).subscribe( (res3:any)=>{
            //     this.nombreMembreParEquipe=res3;
            //     console.log(res3)
            // } )
        }

    });


  }


  editRow(row) {
    if (row.id === 0) {
      this.equipeService.save(row).subscribe((newEquipe: Equipe) => {
        row.idEquipe = newEquipe.idEquipe;
        row.detailEquipe.nombreParticipants=newEquipe.detailEquipe.nombreParticipants

        row.isEdit = false;
      });
    }
    else
    {
        if(confirm("Etes vous sure de modifier cette equipe ?")) {
      this.equipeService.updateEquipe(row.idEquipe,row).subscribe(() => (row.isEdit = false));
            Swal.fire({
                title: 'Mise a jour  Equipe!!',
                text:   "Equipe Bien modifiée",
                icon: 'success'
            });
            this.loaddata();
        }
    }}




  saveEquipe(e:Equipe){
    console.log(e.idEquipe)
this.equipeService.save(e).
subscribe(data=>{

  alert("Cree avec succé")
});
  }
  onSubmit() {
    this.equipeService.save(this.equipe).subscribe(result => {
      alert("Cree avec succé")
    });
  }


  addRow() {
    const newRow: Equipe = {
      idEquipe: 0,
      nomEquipe: '',
      isValid: true,
      isDeleted:false,
      niveau:'',
      isSelected:false,
      image:"",
      isEdit:true,
detailEquipe:new DetailEquipe(),
      nombreMaxParticipants:0


    };
    this.dataSource.data = [newRow, ...this.dataSource.data];

  }
    data2 = [];
    loaddata()
    {

        this.equipeService.findAllEquipes().subscribe((res: any)=>{

            this.data2 = res;
        });
    }
  removeRow(id:number) {
    console.log("hii1")
      if(confirm("Etes vous sure de supprimr cette equipe ?")) {
    this.equipeService.deleteEquipe(id).subscribe(() => {
      console.log(id)

        this.dataSource.data = this.dataSource.data.filter(
          (e: Equipe) => e.idEquipe !== id
      );

    });
          Swal.fire({
              title: 'Suppression Equipe!!',
              text:   "Equipe Bien supprimée",
              icon: 'success'
          });
          this.reloadComponent();
      }
  }
  ChangeValiditeRow(id:number) {
    console.log("hii1")
if(confirm("etes vous sure de changer la validité de cette equipe ?")){

    this.equipeService.changeValidite(id).subscribe(() => {

      console.log(id)

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Equipe bien in(validée)',
                showConfirmButton: false,
                timer: 1500
            })


    }

    );

// let lista :any ;
//    this.equipeService.findAllEquipes().subscribe((res: any) => {
//       this.dataSource.data = res;


// lista=res;
// for(let i =0;i<lista.length;i++){
//   console.log(lista[i].idEquipe)
//   if(lista[i].idEquipe==id){
//   if(lista[i].isValid==0){
//     this.text="non valideeeee"
//   }if(lista[i].isValid==1){
//     this.text="valideeee"
//   }}
// }


    // });



  }
      this.reloadComponent();
    }



  inputHandler(e: any, id: number, key: string) {
    if (!this.valid[id]) {
      this.valid[id] = {};
    }
    this.valid[id][key] = e.target.validity.valid;
  }

  inputHandler1(e: any, id: number, key: string) {
    if (!this.valid[id]) {
      this.valid[id] = {};
      console.log("Hi Mannou Cv1 !")
    }
    this.valid[id][key] = e.target.validity.valid;

    console.log("Hi Mannou Cv !")
  }
  textMethod(){
    console.log("Hiiii")
  }

  disableSubmit(id: number) {
    if (this.valid[id]) {
      return Object.values(this.valid[id]).some((item) => item === false);
    }
    return false;
  }



  display = false;
    display4 = false;
    display2 = false;
    display3 = false;
  displayMembres=false;
  onPress() {
    //this.display = true;

    //To toggle the component
    this.display = !this.display;
  }

    onPress4() {
        //this.display = true;

        //To toggle the component
        this.display4 = !this.display4;
    }


    onPress2() {
        //this.display = true;

        //To toggle the component
        this.display2 = !this.display2;
    }
    onPress3() {
        //this.display = true;

        //To toggle the component
        this.display3 = !this.display3;
    }
    onPressMembres() {
        //this.display = true;

        //To toggle the component
        this.displayMembres = !this.displayMembres;
    }





 /*


  get EquipeId(){
    return this.equipeUpdateForm.get('idEquipe');
  }
  get EquipeNom(){
    return this.equipeUpdateForm.get('nomEquipe');
  }*/


 /* changeisUpdate(){
    this.isupdated=false;
  }
*/
  onError() {
    this.equipe.image = "/assets/img/equipe.jpg";
  }
  public onSave() {
    this.closebutton.nativeElement.click();
  }
 nomEquipe:String;
  e:any;
  image:String;
  date:any;
  //  salle:String;
  //     thematique:String;
  //     dateCreation:Date;
  //     dateActivation:Date;
  //     nombreParticipants: number;
  //     nombreImages: number;
  // this.appService.getAllData().subscribe((data: any[]) => {
  //       this.data = data;
  dateCreation:Date;
  salle:String;
  thematique:String;
  nomResponsable:String;
  dateActivation:Date;
  nombreParticipants: number;
  showModal(id: number) {
    this.equipe.idEquipe = id;
    this.e=this.equipeService.getEquipe(id);
    // this.equipe.image = `http://localhost:8083/kaddem/images/${this
    //                   .equipe.image }`;
    this.equipeService.getEquipe(id).subscribe( (data:Equipe)=>{
      this.e=data;
      console.log(this.e.nomEquipe)
      this.nomEquipe=this.e.nomEquipe;
      this.image=`http://localhost:8083/kaddem/images/${this.e.image }`
     console.log("***********"+this.e.detailEquipe.idDetailEquipe);
      this.salle=this.e.detailEquipe.salle;
      this.nomResponsable=this.e.etudiant.nom
      this.thematique=this.e.detailEquipe.thematique
      this.dateActivation=this.e.detailEquipe.dateActivation;
      this.nombreParticipants=this.e.detailEquipe.nombreParticipants;
      this.dateCreation=this.e.detailEquipe.dateCreation;
      this.equipeService.nbMembresParEquipe(id).subscribe( (nb:number)=>{
          this.nombreMembreParEquipe=nb;

      } )
    } )

 console.log(this.e.nomEquipe)


    console.log(this.equipe.idEquipe)


    this.largeModal.show();
  }

  // afficherDetail(id:number){
  //     this.equipe.idEquipe = id;
  //     this.equipeService.getEquipe(id).subscribe( (data:Equipe)=>{
  //         this.e=data;
  //         this.nombre=this.e.detailEquipe.nombreParticipants;
  //         console.log(this.e.nomEquipe)
  //         console.log(this.e.detailEquipe.nombreParticipants)
  // })}

    public openPDF(): void {
       // let doc = new jsPDF();

        let DATA: any = document.getElementById('htmlData');
        html2canvas(DATA).then((canvas) => {
            let fileWidth = 1000;
            let fileHeight = (canvas.height * fileWidth) / canvas.width;
            const FILEURI = canvas.toDataURL('image/jpg');
            let PDF = new jsPDF('l', 'pt', 'letter');
            let position = 0;
            var img = new Image()
            img.src = 'assets/img/html.png'
            PDF.addImage(img, 'png', 10, 78, 12, 15)
            PDF.text("Mounaaaaaaaaaaaaaaaaaa", 20, 20);
            PDF.addImage("img/", 'JPG', 0, position, fileWidth, fileHeight);

            PDF.save('equipesEsprit.pdf');
        });
    }


    refresh():void {
        this._document.defaultView.location.reload();
    }


    applyFilter(filterValue: string) {
        this.dataSource.filter=filterValue.trim().toLowerCase();
    }
    simpleAlert(){
        Swal.fire('Hello world!');
    }

    alertWithSuccess(){
        Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
    }

    confirmBoxRemove(){
        Swal.fire({
            title: 'étes-vous sur de supprimer cette equipe?',
            text: 'cette equipe sera supprimer definitivement!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'oui!',
            cancelButtonText: 'Non'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'supprimée!',
                    "L'equipe est supprimée definitivement" ,
                    'success'
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Annulée',
                    "l'equipe  n'est pas supprimée",
                    'error'
                )
            }
        })
    }
    equipes2: any[] = [];
    totalElements: number = 0;
    private getEquipes2(request) {
        this.equipeService.getAll(request)
            .subscribe(data => {
                    this.dataSource.data = data['content'];
                    this.totalElements = data['totalElements'];
                }
                , error => {
                    console.log(error.error.message);
                }
            );
    }

    nextPage(event: PageEvent) {
        const request = {};
        request['page'] = event.pageIndex.toString();
        request['size'] = event.pageSize.toString();
        this.getEquipes2(request);
    }
    dowloadExcel(){
        return this.equipeService.donloadExcel().subscribe(
            ()=>{}
        )
    }

    reloadComponent() {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/Equipes']);
    }
    parentMessage = "Attention !!!!"
    @ViewChild(CreateEquipeChildComponent) child
    message: string;
    ngAfterViewInit() {
        this.message = this.child.childMessage
    }

    receiveMessage($event) {
        this.message = $event
        alert(this.message);
    }



    @ViewChild('htmlData', {static: false}) pdfTable: ElementRef;


    public downloadAsPDF() {
        const doc = new jsPDF();

        const specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };

        const pdfTable = this.pdfTable.nativeElement;

        // doc.html(pdfTable.innerHTML, 15, 15, {
        //     width: 190,
        //     'elementHandlers': specialElementHandlers
        // });


        doc.html(pdfTable, {
            callback: (doc) => {
                doc.output("dataurlnewwindow");
            }
        });

        doc.save('tableToPdf.pdf');
    }

}

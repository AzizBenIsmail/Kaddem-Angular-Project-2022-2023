import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EquipeService} from '../../../Services/ServicesEquipes/equipe.service';
import {MatTableDataSource} from '@angular/material/table';
import {Equipe, EquipeColumns} from '../../../models/Equipe';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';

import * as jspdf from 'jspdf';
import {parseJson} from 'ajv/dist/runtime/parseJson';
import position = parseJson.position;

@Component({
  selector: 'app-export-excel',
  templateUrl: './export-excel.component.html',
  styleUrls: ['./export-excel.component.scss']
})
export class ExportExcelComponent implements OnInit {
  columnsSchema: any = EquipeColumns;
  displayedColumns: string[] = EquipeColumns.map((col) => col.key);
  constructor(private equipeService:EquipeService) { }
  dataSource = new MatTableDataSource<Equipe>();
  ngOnInit(): void {
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
  display = false;
  display2 = false;
  displayMembres=false;
  onPress() {
    //this.display = true;

    //To toggle the component
    this.display = !this.display;
  }
  onPress2() {
    //this.display = true;

    //To toggle the component
    this.display2 = !this.display2;
  }

  public openPDF(): void {
    // let doc = new jsPDF();

    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 1000;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/jpg');
      let PDF = new jsPDF('l', 'pt', 'letter');
      let position = 0;

      PDF.text("Mounaaaaaaaaaaaaaaaaaa", 20, 20);
      PDF.addImage(FILEURI, 'JPG', 0, position, fileWidth, fileHeight);
      PDF.save('equipesEsprit.pdf');
    });
  }

  @ViewChild('htmlData', { static: true }) couponPage: ElementRef;

  openPDF2(): void {
    const DATA = document.getElementById('htmlData');

    const doc: jsPDF =   new jsPDF('l', 'pt', 'letter');



    // jsPDF 1.4+ uses getWidth, <1.4 uses .width
    var pageSize = doc.internal.pageSize
    var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth()
    // var text = doc.splitTextToSize("Mounaaaaaaaaaaaaaaa \n \n\n \n", pageWidth - 35, {})







    doc.html(DATA, {
      callback: (doc) => {

        // doc.setTextColor(0, 0, 0);
        // doc.setFontSize(20);
        // if (pNo || pName || projectNo || projectName) {
        //   pdf.text(10, 6, 'Program :' + pNo + ' / ' + pName);
        //   pdf.text(10, 10, 'Project :' + projectNo + ' / ' + projectName);
        // }
        // doc.text("Mouna", 6, 10);
        // doc.setFontSize(20);
        // doc.text("Amdouni", 6, 10);
// C:\Users\Mouna\Desktop\AngularKaddem2\Kaddem-Angular-Project\src\assets\img\angular.png
        var margin = 2;
        doc.setFontSize(18)
        doc.text('Kaddem', 16, 20)
        doc.text('Liste des Equipes ', 250, 20)
        doc.addImage('assets/img/kaddem.png', 'PNG', 500, 400, 100, 70);
        // doc.setFontSize(20)
        // doc.setTextColor(100)

        // doc.text(text, 14, 30)
        doc.output("dataurlnewwindow");

      }
    });
  }

  public captureScreen() {
    var data = document.getElementById('htmlData');
    html2canvas(data).then(canvas => {
      // Few necessary setting options

      const contentDataURL = canvas.toDataURL('image/png')
      var margin = 2;
      var imgWidth = 210 - 2*margin;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jsPDF('p', 'mm');
      var position = 0;

      doc.addImage(contentDataURL, 'PNG', margin, position, imgWidth, imgHeight);

      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(contentDataURL, 'PNG', margin, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save( 'file.pdf');

    });
  }

    fileName='equipes.xlsx'
  exportexcel():void{
    let element=document.getElementById('htmlData')
    const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element)
    const wb:XLSX.WorkBook=XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb,ws,'Sheet1')
    XLSX.writeFile(wb,this.fileName)
  }
  @ViewChild('htmlData', {static: false}) pdfTable: ElementRef;
  public downloadAsPDF() {
    let DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const pdfTable = this.pdfTable.nativeElement;




    doc.html(pdfTable.innerHTML, {
      callback: (doc) => {
        doc.output("dataurlnewwindow");
      }
    });

    doc.save('tableToPdf.pdf');
  }




  pdf() {
       const pdf: jsPDF =  new jsPDF('p', 'pt');
    const pName = JSON.parse(window.localStorage.getItem('programName'));
    const projectName = JSON.parse(window.localStorage.getItem('projectName'));
    const pNo = JSON.parse(window.localStorage.getItem('programNumber'));
    const projectNo = JSON.parse(window.localStorage.getItem('projectNumber'));
    const currentdate = new Date();
    const datetime = (currentdate.getMonth() + 1) + '/' + currentdate.getDate() + '/' + currentdate.getFullYear()
    const runDate = 'Run Date: ' + new Date();
    const data = document.getElementById('htmlData');
   // const margin = 30;

    html2canvas(data).then(canvas => {
      pdf.setTextColor(0, 0, 0);
      pdf.setFontSize(20);
      // if (pNo || pName || projectNo || projectName) {
      //   pdf.text(10, 6, 'Program :' + pNo + ' / ' + pName);
      //   pdf.text(10, 10, 'Project :' + projectNo + ' / ' + projectName);
      // }
      pdf.text("Mouna", 6, 10);
      pdf.setFontSize(20);
      pdf.text("Amdouni", 6, 10);
      // Few necessary setting options
      // const imgWidth = 208 - 2 * margin;
      // const pageHeight = 295;
      // const imgHeight = (canvas.height * imgWidth / canvas.width) - 20;
      // let heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('assets/img/angular.png');
      let position = 18;
      // pdf.addImage(contentDataURL, 'PNG', margin, position, imgWidth, imgHeight - 10);
      // heightLeft -= pageHeight;
      pdf.setFontSize(80);



      // pdf.text(85, 295, 'IFM360 Program Management Module');
      // const totalpages = pdf.internal.getNumberOfPages();
      // for (let i = 1; i <= totalpages; i++) {
      //   pdf.setPage(i);
      //   pdf.text("hhhhhh", 10, 'Page :' + i + ' of ' + 2);
      // }
      // while (heightLeft >= 0) {
      //   position = (heightLeft - imgHeight) + 10;
      //   pdf.addPage();
      //   pdf.addImage(contentDataURL, 'PNG', margin, position, imgWidth, imgHeight + 30);
      //   heightLeft -= pageHeight;
      //   pdf.setTextColor(0, 0, 0);
      //   pdf.setFontSize(80);
      //   pdf.text("Ahmed", 295, 80);
      // }
       pdf.save('Cr_CoLog.pdf');
    });
  }

}

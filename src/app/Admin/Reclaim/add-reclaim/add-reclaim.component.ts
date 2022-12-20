import {Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Reclamation} from '../../../models/Reclamation';
import {ReclaimService} from '../../../Services/ReclaimService/reclaim.service';
import {ListOfContratsComponent} from '../../Contrat/list-of-contrats/list-of-contrats.component';

@Component({
  selector: 'app-add-reclaim',
  templateUrl: './add-reclaim.component.html',
  styleUrls: ['./add-reclaim.component.scss']
})
export class AddReclaimComponent implements OnInit {
  formReclaim:FormGroup;

  @ViewChild('fileUpload')
  fileUpload: ElementRef

  inputFileName: string

  @Input()
  files: File[] = []
  @Input()
  mode
  @Input()
  names
  @Input()
  url
  @Input()
  method
  @Input()
  multiple
  @Input()
  disabled
  @Input()
  accept
  @Input()
  maxFileSize
  @Input()
  auto = true
  @Input()
  withCredentials
  @Input()
  invalidFileSizeMessageSummary
  @Input()
  invalidFileSizeMessageDetail
  @Input()
  invalidFileTypeMessageSummary
  @Input()
  invalidFileTypeMessageDetail
  @Input()
  previewWidth
  @Input()
  chooseLabel = 'Choose'
  @Input()
  uploadLabel = 'Upload'
  @Input()
  cancelLabel = 'Cance'
  @Input()
  customUpload
  @Input()
  showUploadButton
  @Input()
  showCancelButton
  @Input()
  dataUriPrefix
  @Input()
  deleteButtonLabel
  @Input()
  deleteButtonIcon = 'close'
  @Input()
  showUploadInfo
  rec: Reclamation;
  constructor(private _formBuilder: FormBuilder,private sanitizer: DomSanitizer, private rService: ReclaimService,
      private dialogRef: MatDialogRef<ListOfContratsComponent>) { }


  ngOnInit(): void {

    this.formReclaim = this._formBuilder.group({
      title: ['', Validators.required],
      message: ['', Validators.required, Validators.minLength(50)],
      image: ['', Validators.required],
    })
  }


  onClick(event) {
    if (this.fileUpload)
      this.fileUpload.nativeElement.click()
  }

  onInput(event) {

  }

  onFileSelected(event) {
    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    console.log('event::::::', event)
    for (let i = 0; i < files.length; i++) {
      let file = files[i];

      //if(!this.isFileSelected(file)){
      if (this.validate(file)) {
        //      if(this.isImage(file)) {
        file.objectURL = this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(files[i])));
        //      }
        if (!this.isMultiple()) {
          this.files = []
        }
        this.files.push(files[i]);
        //  }
      }
      //}
    }
  }

  removeFile(event, file) {
    let ix
    if (this.files && -1 !== (ix = this.files.indexOf(file))) {
      this.files.splice(ix, 1)
      this.clearInputElement()
    }
  }

  validate(file: File) {
    for (const f of this.files) {
      if (f.name === file.name
          && f.lastModified === file.lastModified
          && f.size === f.size
          && f.type === f.type
      ) {
        return false
      }
    }
    return true
  }

  clearInputElement() {
    this.fileUpload.nativeElement.value = ''
  }


  isMultiple(): boolean {
    return this.multiple
  }

  addReclaim(f:any){
    this.rec=f;
    this.rService.saveReclamation(this.rec).subscribe((data)=>{
      console.log("Successfully added !",data)
    });
    this.dialogRef.close()
    console.log('A new project added to the database');
    console.log("*****",f)
    this.dialogRef.close(`${f}`);
  }
}

import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Equipe} from '../../../models/Equipe';
import {ActivatedRoute, Router} from '@angular/router';
import {EquipeService} from '../../../Services/ServicesEquipes/equipe.service';
import {ModalDismissReasons, NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {


equipe:Equipe;
  constructor(private route:ActivatedRoute,
              private router:Router,
              private equipeService:EquipeService,
              private modalService: NgbModal,

              ) {
    this.equipe=new Equipe();
  }
  @ViewChild('content') addview !: ElementRef

  ngOnInit(): void {
  }

  errormessage = '';
  errorclass = '';
  saveresponse: any;
  editdata: any;
  destdata:any;

  equipeForm = new FormGroup({
/**
 public void AddEquipe(@RequestParam String nomEquipe,
 @RequestParam Niveau niveau,
 @RequestParam String salle,
 @RequestParam String thematique,
 @RequestParam Integer nombreMaxParticipants,
 @RequestParam(name = "image",required = false) MultipartFile file) throws IOException {
 */
    nomEquipe: new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)])),





  });
  SaveEquipe() {
    if (this.equipeForm.valid) {

      console.log(this.equipeForm.getRawValue());

      this.equipeService.save(this.equipeForm.getRawValue()).subscribe(result => {
        this.saveresponse = result;

        if (this.saveresponse.result == 'pass') {

          this.errormessage = "Saved Sucessfully";
          this.errorclass = "sucessmessage";
          setTimeout(()=>{
            this.modalService.dismissAll();
          },1000)

        } else {
          this.errormessage = "Failed to save";
          this.errorclass = "errormessage";
        }
      });

    } else {
      this.errormessage = "Please enter valid data";
      this.errorclass = "errormessage";
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  get nomEquipe() {
    return this.equipeForm.get("nomEquipe");
  }

  onSubmit() {
    this.equipeService.save(this.equipe).subscribe(result => this.gotoEquipeList());
  }
  gotoEquipeList() {
    this.router.navigate(['/Equipes']);
  }

  Clearform(){
    this.equipeForm.setValue({nomEquipe:''})
  }

  open() {

  this.modalService.open(this.addview);
  }


  display = false;
  onPress() {
    //this.display = true;

    //To toggle the component
    this.display = !this.display;
  }

}

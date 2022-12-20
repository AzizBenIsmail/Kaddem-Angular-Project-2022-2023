import {Component, Inject, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../EquipesManagment/confirm-dialog/confirm-dialog.component";
import {ContratService} from "../../../Services/ContratService/contrat.service";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  title: string;
  message: string;

  constructor(private cService:ContratService, public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}

/**
 * Class to represent confirm dialog model.
 *
 * It has been kept here to keep it as part of shared component.
 */
export class ConfirmDialogModel {

  constructor(public title: string, public message: string) {
  }
}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-equipe-child',
  templateUrl: './create-equipe-child.component.html',
  styleUrls: ['./create-equipe-child.component.scss']
})
export class CreateEquipeChildComponent implements OnInit {
  @Input() childMessage: string;
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageEvent.emit(this.childMessage)
  }

}

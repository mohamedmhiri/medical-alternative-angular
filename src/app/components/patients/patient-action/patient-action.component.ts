import { Patient } from './../../../models/patient';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/*import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui'
import {SuiModal, ComponentModalConfig, ModalSize} from "ng2-semantic-ui"*/
@Component({
  selector: 'patient-action',
  templateUrl: './patient-action.component.html',
  styleUrls: ['./patient-action.component.css']
})
export class PatientActionComponent implements OnInit {
  @Input() patient: Patient
  @Output() action = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {
  }

  public patientAction(msg: string): void {
    this.action.emit(msg)
  }

}

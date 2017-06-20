import { Patient } from './../../../models/patient';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'patient-action',
  templateUrl: './patient-action.component.html',
  styleUrls: ['./patient-action.component.css']
})
export class PatientActionComponent implements OnInit {
  @Input() patient: Patient
  constructor() { }

  ngOnInit() {
  }

}

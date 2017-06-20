import { Patient } from './../../../models/patient';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'patient-name',
  templateUrl: './patient-name.component.html',
  styleUrls: ['./patient-name.component.css']
})
export class PatientNameComponent implements OnInit {

  @Input() patient: Patient
  constructor() { }

  ngOnInit() {
  }

}

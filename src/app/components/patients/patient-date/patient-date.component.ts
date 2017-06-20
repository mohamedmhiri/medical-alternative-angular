import { Patient } from './../../../models/patient';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'patient-date',
  templateUrl: './patient-date.component.html',
  styleUrls: ['./patient-date.component.css']
})
export class PatientDateComponent implements OnInit {
  @Input() patient: Patient

  constructor() { }

  ngOnInit() {
  }

}

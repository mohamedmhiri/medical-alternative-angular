import { Patient } from './../../../models/patient';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  @Input() patient: Patient
  constructor() { }

  ngOnInit() {
  }

}

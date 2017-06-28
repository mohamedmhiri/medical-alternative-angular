import { Patient } from './../../../models/patient';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit {

  @Input() patient: Patient
  constructor() { }

  ngOnInit() {
  }

  public testGeneralInfo(): string {
    if ( (this.patient.country !== '') || (this.patient.city !== '') || (this.patient.address !== '') || (this.patient.ssiNum !== '') || (this.patient.ssiType !== '')) {
      return 'yes'
    } else {
      return 'no'
    }
  }

}

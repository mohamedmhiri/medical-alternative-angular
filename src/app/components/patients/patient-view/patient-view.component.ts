import { Patient } from './../../../models/patient';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'patient-view',
  templateUrl: './patient-view.component.html',
  styleUrls: ['./patient-view.component.css']
})
export class PatientViewComponent implements OnInit {

  private antecedant: string
  @Input() patient: Patient
  constructor() { }

  ngOnInit() {
    this.antecedant = ''
  }

  public testHome(): string {
    if ( (this.patient.country !== '') || (this.patient.city !== '') || (this.patient.address !== '') ) {
      return 'yes'
    } else {
      return 'no'
    }
  }

  public testSsi(): string {
    if ((this.patient.ssiNum !== '') || (this.patient.ssiType !== '')) {
      return 'yes'
    } else {
      return 'no'
    }
  }

  public antecedantAdd(): string {
    return this.antecedant = 'add'
  }

  public antecedantUpdate(): string {
    return this.antecedant = 'update'
  }

  public antecedantDel(): string {
    return this.antecedant = 'del'
  }

}

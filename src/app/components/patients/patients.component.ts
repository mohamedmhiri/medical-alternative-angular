import { Patient } from './../../models/patient';
import { Observable } from 'rxjs/Observable';
import { PatientService } from './../../services/patient.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [PatientService],
})
export class PatientsComponent implements OnInit {

  private p: number = 1;
  private total: number 
  private loading: boolean;
  private entities: Patient[]
  private patients: Observable<Patient[]>
  private alpha: string[]
  private response: Observable<{
    entities: Patient[]
    total: number
  }>
  private conf = { 
    itemsPerPage: 10,
    currentPage: this.p,
    totalItems: this.total
  }
  
  //private patients: Patient[]

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    // to be changed ==> list of patients with the most recent consultations
    /*this.patients = this.patientService.startsWith('A')
    this.patients.subscribe(data => {
      this.entities = data
    })*/
    this.patientService.search('ello').subscribe(data => {
      this.entities = data
    })
  }


  /*public startsWith(i: string, item: Patient) {
    return (item.firstName.charAt(0)== i || item.firstName.charAt(0)== i.toLowerCase()||item.lastName.charAt(0)== i || item.lastName.charAt(0)== i.toLowerCase())
  }*/
  public filterByAlpha(patients: Patient[]) {
    this.entities = patients
  }

  public menuTest(i: number): number {
    if (i < 8) {
      return 0
    } else if (i >= 8 && i < 16) {
      return 1
    } else if (i >= 16 && i < 24) {
      return 2
    } else {
      return 3
    }
  }

  public searchEvent(patients: Patient[]) {
    console.log(patients)
    this.entities = patients
  }

}

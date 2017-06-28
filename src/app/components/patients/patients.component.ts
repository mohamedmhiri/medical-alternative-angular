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

  private add: string
  private patientAction: string
  private total: number 
  private loading: boolean;
  private entities: Patient[]
  private alpha: string[]

  
  //private patients: Patient[]

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientAction = ''
    this.add=''
    this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    // to be changed ==> list of patients with the most recent consultations
    /*this.patients = this.patientService.startsWith('A')
    this.patients.subscribe(data => {
      this.entities = data
    })*/
    this.patientService.startsWith('A').subscribe(data => {
      this.entities = data
    })
  }


  /*public startsWith(i: string, item: Patient) {
    return (item.firstName.charAt(0)== i || item.firstName.charAt(0)== i.toLowerCase()||item.lastName.charAt(0)== i || item.lastName.charAt(0)== i.toLowerCase())
  }*/
  public filterByAlpha(patients: Patient[]) {
    this.add = 'hide'
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
    this.add = 'hide'
    console.log(patients)
    this.entities = patients
  }

  public patientAct(msg: string): string {
    return this.patientAction = msg
  }

  public viewAction(): string {
    return this.patientAction = 'view'
  }

  public cancel (msg: string): string {
    this.patientService.startsWith('A').subscribe(data => {
      this.entities = data
    })
    return this.patientAction = msg
  }

  public addForm(): void {
    this.add = 'insert'
  }
  
  public postAdd (): string {
    return this.add = ''
  }
  public postUpdate (): string {
    return this.patientAction = ''
  }

}

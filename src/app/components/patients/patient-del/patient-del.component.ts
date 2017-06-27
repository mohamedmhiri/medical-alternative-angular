import { PatientService } from './../../../services/patient.service';
import { Patient } from './../../../models/patient';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'patient-del',
  templateUrl: './patient-del.component.html',
  styleUrls: ['./patient-del.component.css'],
  providers: [PatientService]
})
export class PatientDelComponent implements OnInit {

  @Input() patient: Patient
  @Output() del = new EventEmitter<string>()
  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  public delPatient(): void{
    console.log(this.patient)
    this.patientService
    .deleteOne(this.patient)
    .subscribe(data => {
      console.log(`${data} deleted`)
    })
    this.del.emit('deleted')
  }

  public cancelDel(): void{
    this.del.emit('')
  }

}

import { Ssi } from './../../../models/ssi';
import { CityName } from './../../../models/city-names';
import { PatientService } from './../../../services/patient.service';
import { Patient } from './../../../models/patient';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css'],
  providers: [PatientService]
})
export class PatientAddComponent implements OnInit {

  private patientForm: FormGroup
  private patient: Patient
  private cityName: CityName
  private ssiType: Ssi
  constructor(private fb: FormBuilder, private patientService: PatientService) {}

  ngOnInit() {
    this.patient = new Patient()
    this.cityName = new CityName()
    this.ssiType = new Ssi()
    this.createForm()
  }

  public isValid() { 
    return this.patientForm.controls.valid
  }
  
  createForm() {
    this.patientForm = this.fb.group({
      firstName: [this.patient.firstName, [Validators.required]],
      lastName: [this.patient.lastName, [Validators.required]],
      email: [this.patient.email, [Validators.required, Validators.email]],
      cin: [this.patient.cin, Validators.required],
      gsm: [this.patient.gsm, [Validators.required]],
      gsm2: [this.patient.gsm2, [Validators.required]],
      birthday: [this.patient.birthday, [Validators.required]],
      birthmonth: [this.patient.birthmonth, [Validators.required]],
      birthyear: [this.patient.birthyear, [Validators.required]],
      birthCity: [this.patient.birthCity, [Validators.required]],
      gender: [this.patient.gender, [Validators.required]],
      country: [this.patient.country, [Validators.required]],
      address: [this.patient.address, [Validators.required]],
      city: [this.patient.city, [Validators.required]],
      ssiType: [this.patient.ssiType, [Validators.required]],
      ssiNum: [this.patient.ssiNum, [Validators.required]],
    })
  }

  public pushPatient() {
    const formModel = this.patientForm.value
    console.log(formModel)
    console.log(this.patientForm.errors)
    console.log(this.patientForm)
  }


}

import { Day } from './../../../models/day';
import { Month } from './../../../models/month';
import { Ssi } from './../../../models/ssi';
import { CityName } from './../../../models/city-names';
import { PatientService } from './../../../services/patient.service';
import { Patient } from './../../../models/patient';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewChecked } from '@angular/core';

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
  private months: Month
  private days: Day
  private submitted: boolean
  constructor(private fb: FormBuilder, private patientService: PatientService) {}

  ngOnInit() {
    this.submitted = false
    this.days = new Day()
    this.months = new Month()
    this.patient = new Patient()
    this.cityName = new CityName()
    this.ssiType = new Ssi()
    this.createForm()
  }
  
  createForm() {
    this.patientForm = this.fb.group({
      firstName: [this.patient.firstName, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      lastName: [this.patient.lastName, [Validators.required]],
      email: [this.patient.email, [Validators.pattern(`^[_A-Za-z0-9-\\+]+
      (\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+
      (\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$`)]],
      cin: [this.patient.cin],
      gsm: [this.patient.gsm],
      gsm2: [this.patient.gsm2],
      birthday: [this.patient.birthday],
      birthmonth: [this.patient.birthmonth],
      birthyear: [this.patient.birthyear],
      birthCity: [this.patient.birthCity],
      gender: [this.patient.gender],
      country: [this.patient.country],
      address: [this.patient.address],
      city: [this.patient.city],
      ssiType: [this.patient.ssiType],
      ssiNum: [this.patient.ssiNum],
    })

    this.patientForm.valueChanges.subscribe(data => {
      this.onValueChanged(data)
    })

    this.onValueChanged() // (re)set validation messages now
  }

  public pushPatient() {
    const formModel = this.patientForm.value
    console.log(formModel)
    console.log(this.patientForm.errors)
  }

  public onValueChanged(data?: any) {
    if (!this.patientForm) {
      return
    }
    const form = this.patientForm
 
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
 
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        this.submitted = false
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
 
  formErrors = {
    'firstName': '',
    'lastName': '',
    'email': ''
  }
 
  validationMessages = {
    'firstName': {
      'required':      'Patient Name is required.',
      'minlength':     'Patient Name must be at least 4 characters long.',
      'maxlength':     'Patient Name cannot be more than 24 characters long.'
    },
    'lastName': {
      'required': 'Patient Family Name is required.'
    },
    'email': {
      'pattern': 'This is not a valid E-mail.'
    }
  }


}

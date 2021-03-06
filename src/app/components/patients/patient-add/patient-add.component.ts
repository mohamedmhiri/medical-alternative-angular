import { Day } from './../../../models/day';
import { Month } from './../../../models/month';
import { Ssi } from './../../../models/ssi';
import { CityName } from './../../../models/city-names';
import { PatientService } from './../../../services/patient.service';
import { Patient } from './../../../models/patient';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewChecked, DoCheck, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css'],
  providers: [PatientService]
})
export class PatientAddComponent implements OnInit, DoCheck {

  private patientForm: FormGroup
  private patient: Patient
  private cityName: CityName
  private ssiType: Ssi
  private months: Month
  private days: Day
  private buttonClass: string
  @Output() add = new EventEmitter<string>()
  constructor(private fb: FormBuilder, private patientService: PatientService) {}

  ngOnInit() {
    this.buttonClass = 'ui disabled button'
    this.days = new Day()
    this.months = new Month()
    this.patient = new Patient()
    this.cityName = new CityName()
    this.ssiType = new Ssi()
    this.createForm()
  }
  
  ngDoCheck() {
    this.buttonClass = `ui ${this.getButtonClass()} button`
  }

  public getButtonClass(): string{
    if (this.patientForm.pristine) {
      return 'disabled'
    } else {
      if ( (this.formErrors.firstName === '') && (this.formErrors.lastName === '') && (this.patientForm.value.firstName) && (this.patientForm.value.lastName) &&  (this.formErrors.cin === '') && (this.patientForm.value.cin)) {
        if ( (this.formErrors.gsm === '') && (this.formErrors.gsm2 === '') && (this.formErrors.email === '') && (this.formErrors.birthyear === '') ) {
          return 'enabled'
        }
        else {
          return 'disabled'
        }
      } else {
        return 'disabled'
      }
    }
  }
  createForm() {
    this.patientForm = this.fb.group({
      firstName: [this.patient.firstName, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      lastName: [this.patient.lastName, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      email: [this.patient.email, [Validators.pattern(`.+\\@.+\\..{2,}`)]],
      cin: [this.patient.cin, [Validators.required, Validators.pattern(`^[0-9]{8}`)]],
      gsm: [this.patient.gsm, [Validators.pattern(`^[0-9]{8}`)]],
      gsm2: [this.patient.gsm2, [Validators.pattern(`^[0-9]{8}`)]],
      birthday: [this.patient.birthday],
      birthmonth: [this.patient.birthmonth],
      birthyear: [this.patient.birthyear, [Validators.pattern(`^[0-9]{4}`)]],
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
    const _patient = new Patient()
    _patient.firstName = formModel.firstName
    _patient.lastName = formModel.lastName
    if (formModel.cin) {
      _patient.cin = formModel.cin
    }
    if (formModel.email) {
      _patient.email = formModel.email
    }
    if (formModel.address) {
      _patient.address = formModel.address
    }
    if (formModel.city) {
      _patient.city = formModel.city
    }
    if (formModel.gsm) {
      _patient.gsm = formModel.gsm
    }
    if (formModel.gsm2) {
      _patient.gsm2 = formModel.gsm2
    }
    if (formModel.country) {
      _patient.country = formModel.country
    }
    if (formModel.gender) {
      _patient.gender = formModel.gender
    }
    if (formModel.birthCity) {
      _patient.birthCity = formModel.birthCity
    }
    if (formModel.birthday) {
      _patient.birthday = formModel.birthday
    }
    if (formModel.birthmonth) {
      _patient.birthmonth = formModel.birthmonth
    }
    if (formModel.birthyear) {
      _patient.birthyear = formModel.birthyear
    }
    if (formModel.ssiType) {
      _patient.ssiType = formModel.ssiType
    }
    if (formModel.ssiNum) {
      _patient.ssiNum = formModel.ssiNum
    }
    this.patientService.create(_patient).subscribe(data => {
      console.log(`${data} successfully added`)
    })
    this.add.emit('')
    
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
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
 
  formErrors = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'cin': '',
    'gsm': '',
    'gsm2': '',
    'birthyear': ''
  }
 
  validationMessages = {
    'firstName': {
      'required':      'Patient Name is required.',
      'minlength':     'Patient Name must be at least 4 characters long.',
      'maxlength':     'Patient Name cannot be more than 24 characters long.'
    },
    'lastName': {
      'required':      'Patient Family Name is required.',
      'minlength':     'Patient Family Name must be at least 4 characters long.',
      'maxlength':     'Patient Family Name cannot be more than 24 characters long.'
    },
    'email': {
      'pattern':       'Patient e-mail must follow this pattern: smth@email.domain.'
    },
    'cin': {
      'required':      'National ID card number is required.',
      'pattern':       'National ID card number must have 8 digits'
    },
    'gsm': {
      'pattern':       'First Gsm number must have 8 digits'
    },
    'gsm2': {
      'pattern':       'Second Gsm number must have 8 digits'
    },
    'birthyear': {
      'pattern':       'Birth Year must have 4 digits'
    },
  }


}

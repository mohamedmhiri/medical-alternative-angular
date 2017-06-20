import { DoctorService } from './../../services/doctor.service';
import { element } from 'protractor';
import { Doctor } from './../../models/doctor';
import { Signup } from './../../models/signup';
import { AuthService } from './../../services/auth.service';
import { Login } from './../../models/login';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('tab', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({transform: 'translateY(100%)'}))
      ])
    ]),
    trigger('form', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(100%)'}),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({transform: 'translateY(-100%)'}))
      ])
    ])
  ],
  providers: [AuthService, DoctorService]
})
export class LoginComponent implements OnInit {

  
  private loginForm: FormGroup
  private signUpForm: FormGroup
  private login: Login
  private signUp: Signup
  constructor(private fb: FormBuilder, private auth: AuthService, private doctorService: DoctorService) {}

  ngOnInit() {
    this.login = new Login()
    this.signUp = new Signup()
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: [this.login.email, [Validators.required, Validators.email]],
      password: [this.login.password, Validators.required],
    })
    this.signUpForm = this.fb.group({
      firstName: [this.signUp.firstName, [Validators.required]],
      lastName: [this.signUp.lastName, [Validators.required]],
      email: [this.signUp.email, [Validators.required, Validators.email]],
      password: [this.signUp.password, Validators.required],
      tel: [this.signUp.tel, [Validators.required]]
    })
  }
  validateLogin() {
    const formModel = this.loginForm.value
    //this.auth.loginWithGoogle()
    this.auth.login(formModel.email, formModel.password)    
  }

  validateSignup() {
    const formModel = this.signUpForm.value
    let doctor = new Doctor()
    doctor.firstName = formModel.firstName
    doctor.lastName = formModel.lastName
    doctor.email = formModel.email
    doctor.tel = formModel.tel
    this.doctorService.create(doctor).subscribe(data => {
      console.log(data)
    })
    this.auth.signup(formModel.email, formModel.password)  
  }

  logout() {
    this.auth.logout()
  }

}

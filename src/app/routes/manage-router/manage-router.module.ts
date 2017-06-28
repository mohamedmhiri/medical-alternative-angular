import { PatientDelComponent } from './../../components/patients/patient-del/patient-del.component';
import { PatientUpdateComponent } from './../../components/patients/patient-update/patient-update.component';
import { PatientViewComponent } from './../../components/patients/patient-view/patient-view.component';
import { PatientAddComponent } from './../../components/patients/patient-add/patient-add.component';
import { AppointmentsComponent } from './../../components/appointments/appointments.component';
import { DoctorsComponent } from './../../components/doctors/doctors.component';
import { TestsComponent } from './../../components/tests/tests.component';
import { AntecedantComponent } from './../../components/antecedant/antecedant.component';
import { StatsComponent } from './../../components/stats/stats.component';
import { PatientsComponent } from './../../components/patients/patients.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const ROUTES = [
    {
      path: '', 
      component: StatsComponent
    },
    {
      path: 'patients',
      component: PatientsComponent
    },
    {
      path: 'patients/view',
      component: PatientViewComponent
    },
    {
      path: 'stats',
      component: StatsComponent
    },
    {
      path: 'antecedant',
      component: AntecedantComponent
    },
    {
      path: 'test',
      component: TestsComponent
    },
    {
      path: 'doctors',
      component: DoctorsComponent
    },
    {
      path: 'appointments',
      component: AppointmentsComponent
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class ManageRouterModule { }

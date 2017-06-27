import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientDelComponent } from './../../components/patients/patient-del/patient-del.component';
import { PatientUpdateComponent } from './../../components/patients/patient-update/patient-update.component';
import { PatientViewComponent } from './../../components/patients/patient-view/patient-view.component';
import { PatientRouterModule } from './../../routes/patient-router/patient-router.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  exports: [
    PatientRouterModule
  ]
})
export class PatientModule { }

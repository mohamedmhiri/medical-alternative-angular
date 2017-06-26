import { PatientListComponent } from './../../components/patients/patient-list/patient-list.component';
import { PatientSearchComponent } from './../../components/patients/patient-search/patient-search.component';
import { PatientViewComponent } from './../../components/patients/patient-view/patient-view.component';
import { PatientDelComponent } from './../../components/patients/patient-del/patient-del.component';
import { PatientUpdateComponent } from './../../components/patients/patient-update/patient-update.component';
import { PatientAddComponent } from './../../components/patients/patient-add/patient-add.component';
import { UtilModule } from './../util/util.module';
import { AlphaMenuComponent } from './../../components/patients/alpha-menu/alpha-menu.component';
import { PatientActionComponent } from './../../components/patients/patient-action/patient-action.component';
import { PatientDateComponent } from './../../components/patients/patient-date/patient-date.component';
import { PatientNameComponent } from './../../components/patients/patient-table/patient-name.component';
import { HttpModule } from '@angular/http';
import { DoctorsComponent } from './../../components/doctors/doctors.component';
import { AppointmentsComponent } from './../../components/appointments/appointments.component';
import { CollectionModule } from './../collection/collection.module';
import { ManageRouterModule } from './../../routes/manage-router/manage-router.module';
import { AntecedantComponent } from './../../components/antecedant/antecedant.component';
import { ConsultationComponent } from './../../components/consultation/consultation.component';
import { StatsComponent } from './../../components/stats/stats.component';
import { TestsComponent } from './../../components/tests/tests.component';
import { PatientsComponent } from './../../components/patients/patients.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  imports: [
    CommonModule,
    ManageRouterModule,
    NgxPaginationModule,
    HttpModule,
    UtilModule,
    
  ],
  declarations: [
    PatientsComponent,
    TestsComponent,
    StatsComponent,
    ConsultationComponent,
    AntecedantComponent,
    AppointmentsComponent,
    DoctorsComponent,
    PatientNameComponent,
    PatientDateComponent,
    PatientActionComponent,
    AlphaMenuComponent,
    PatientAddComponent,
    PatientUpdateComponent,
    PatientDelComponent,
    PatientViewComponent,
    PatientSearchComponent,
    PatientListComponent
  ],
  exports: [
    NgxPaginationModule,
    HttpModule,
  ],
})
export class ManagerModule { }

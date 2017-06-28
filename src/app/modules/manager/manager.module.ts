import { TestUpdateComponent } from './../../components/tests/test-update/test-update.component';
import { TestDelComponent } from './../../components/tests/test-del/test-del.component';
import { TestAddComponent } from './../../components/tests/test-add/test-add.component';
import { AvailabilityUpdateComponent } from './../../components/availabilities/availability-update/availability-update.component';
import { AvailabilityAddComponent } from './../../components/availabilities/availability-add/availability-add.component';
import { AvailabilityDelComponent } from './../../components/availabilities/availability-del/availability-del.component';
import { AvailabilitiesComponent } from './../../components/availabilities/availabilities.component';
import { DecisionUpdateComponent } from './../../components/decisions/decision-update/decision-update.component';
import { DecisionDelComponent } from './../../components/decisions/decision-del/decision-del.component';
import { DecisionAddComponent } from './../../components/decisions/decision-add/decision-add.component';
import { DecisionsComponent } from './../../components/decisions/decisions.component';
import { TreatmentUpdateComponent } from './../../components/treatments/treatment-update/treatment-update.component';
import { TreatmentDelComponent } from './../../components/treatments/treatment-del/treatment-del.component';
import { TreatmentAddComponent } from './../../components/treatments/treatment-add/treatment-add.component';
import { TreatmentsComponent } from './../../components/treatments/treatments.component';
import { ConsultationAddComponent } from './../../components/consultations/consultation-add/consultation-add.component';
import { ConsultationUpdateComponent } from './../../components/consultations/consultation-update/consultation-update.component';
import { ConsultationDelComponent } from './../../components/consultations/consultation-del/consultation-del.component';
import { AntecedantDelComponent } from './../../components/antecedants/antecedant-del/antecedant-del.component';
import { AntecedantUpdateComponent } from './../../components/antecedants/antecedant-update/antecedant-update.component';
import { AntecedantAddComponent } from './../../components/antecedants/antecedant-add/antecedant-add.component';
import { AntecedantsComponent } from './../../components/antecedants/antecedants.component';
import { ConsultationsComponent } from './../../components/consultations/consultations.component';
import { AppointmentDelComponent } from './../../components/appointments/appointment-del/appointment-del.component';
import { AppointmentUpdateComponent } from './../../components/appointments/appointment-update/appointment-update.component';
import { AppointmentAddComponent } from './../../components/appointments/appointment-add/appointment-add.component'
import { PatientModule } from './../patient/patient.module';
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
    PatientModule
  ],
  declarations: [
    StatsComponent,
    AntecedantAddComponent,
    AntecedantUpdateComponent,
    AntecedantDelComponent,
    ConsultationsComponent,
    ConsultationDelComponent,
    ConsultationUpdateComponent,
    ConsultationAddComponent,
    AppointmentsComponent,
    AppointmentUpdateComponent,
    AppointmentAddComponent,
    AppointmentDelComponent,
    AntecedantsComponent,
    TreatmentsComponent,
    TreatmentAddComponent,
    TreatmentDelComponent,
    TreatmentUpdateComponent,
    DecisionsComponent,
    DecisionAddComponent,
    DecisionDelComponent,
    DecisionUpdateComponent,
    AvailabilitiesComponent,
    AvailabilityDelComponent,
    AvailabilityAddComponent,
    AvailabilityUpdateComponent,
    TestsComponent,
    TestAddComponent,
    TestDelComponent,
    TestUpdateComponent,
    DoctorsComponent,
    PatientsComponent,
    PatientNameComponent,
    PatientDateComponent,
    PatientActionComponent,
    AlphaMenuComponent,
    PatientAddComponent,
    PatientSearchComponent,
    PatientListComponent,
    PatientViewComponent,
    PatientUpdateComponent,
    PatientDelComponent,
  ],
  exports: [
    NgxPaginationModule,
    HttpModule,
  ],
})
export class ManagerModule { }

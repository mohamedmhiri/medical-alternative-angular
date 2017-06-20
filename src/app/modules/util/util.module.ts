import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ng2-semantic-ui module from https://edcarroll.github.io/ng2-semantic-ui
import {SuiModule} from 'ng2-semantic-ui'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
  ],
  exports: [
    SuiModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    CalendarModule
  ],
  declarations: []
})
export class UtilModule { }

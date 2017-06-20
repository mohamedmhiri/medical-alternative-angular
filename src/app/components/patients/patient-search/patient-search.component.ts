import { Search } from './../../../models/search';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Patient } from './../../../models/patient';
import { PatientService } from './../../../services/patient.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css']
})
export class PatientSearchComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<Patient[]>()
  private searchForm: FormGroup
  private search: Search
  constructor(private fb: FormBuilder, private patientService: PatientService) { }

  ngOnInit() {
    this.search = new Search()
    this.createForm()
  }

  public createForm() {
    this.searchForm = this.fb.group({
      txt: [this.search.txt, [Validators.required]]
    })
  }

  public searchByText(txt: string) {
    const formModel = this.searchForm.value
    this.patientService.search(formModel.txt).subscribe(data => {
      this.searchEvent.emit(data)
    })
  }

}

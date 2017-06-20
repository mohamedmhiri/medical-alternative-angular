import { Patient } from './../../../models/patient';
import { PatientService } from './../../../services/patient.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alpha-menu',
  templateUrl: './alpha-menu.component.html',
  styleUrls: ['./alpha-menu.component.css'],
  providers: [PatientService]
})
export class AlphaMenuComponent implements OnInit {

  @Input() alpha: string
  @Input() index: number
  @Output() alphaFilter = new EventEmitter<Patient[]>()
  private entities: Patient[]
  private ind: number
  private itemClass: string
  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.ind = this.index
    this.itemClass = 'item'
  }

  
  public startsWith(item: Patient, i: string) {
    return (item.firstName[0] == ( i || i.toLowerCase() ) || item.lastName[0] == ( i || i.toLowerCase() ) )
  }
  public filterByAlpha(i: string) {
    this.itemClass = 'item active'
    console.log(i)
    this.patientService.startsWith(i).subscribe(data => {
      console.log(data)
      this.alphaFilter.emit(data)
    })
  }

  public toggleItem() {
    this.itemClass = 'item'
  }
}

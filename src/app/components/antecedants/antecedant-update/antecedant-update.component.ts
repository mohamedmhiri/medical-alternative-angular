import { Antecedant } from './../../../models/antecedant';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'antecedant-update',
  templateUrl: './antecedant-update.component.html',
  styleUrls: ['./antecedant-update.component.css']
})
export class AntecedantUpdateComponent implements OnInit {

  @Input() antecedant: Antecedant
  constructor() { }

  ngOnInit() {
  }

}

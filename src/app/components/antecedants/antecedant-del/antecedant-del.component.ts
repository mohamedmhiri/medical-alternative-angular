import { Antecedant } from './../../../models/antecedant';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'antecedant-del',
  templateUrl: './antecedant-del.component.html',
  styleUrls: ['./antecedant-del.component.css']
})
export class AntecedantDelComponent implements OnInit {

  @Input() antecedant: Antecedant
  constructor() { }

  ngOnInit() {
  }

}

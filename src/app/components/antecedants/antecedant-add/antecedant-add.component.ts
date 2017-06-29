import { Antecedant } from './../../../models/antecedant';
import { AntecedantService } from './../../../services/antecedant.service'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, AfterViewChecked, DoCheck, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'antecedant-add',
  templateUrl: './antecedant-add.component.html',
  styleUrls: ['./antecedant-add.component.css'],
  providers: [AntecedantService]
})
export class AntecedantAddComponent implements OnInit, DoCheck{

  private buttonClass: string
  private antecedantForm: FormGroup
  private antecedant: Antecedant
  constructor(private fb: FormBuilder, private antecedantService: AntecedantService) { }

  ngOnInit() {
    this.buttonClass = 'ui disabled button'
    this.antecedant = new Antecedant()
    this.createForm()
  }

  ngDoCheck() {
    this.buttonClass = `ui ${this.getButtonClass()} button`
  }

  public createForm() {
    this.antecedantForm = this.fb.group({
      medicals: [this.antecedant.medicals],
      treatment: [this.antecedant.treatment],
      surgical: [this.antecedant.surgical],
      type: [this.antecedant.type]
    })
  }

  public pushAntecedant(): void {
    console.log(this.antecedantForm.value)
    
  }

  public getButtonClass(): string {
    if (this.antecedantForm.pristine) {
      return 'disabled'
    } else {
      if ( (this.antecedantForm.value.medicals) && (this.antecedantForm.value.treatment) &&  (this.antecedantForm.value.surgical) && (this.antecedantForm.value.type)) {
        return 'enabled'
      } else {
          return 'disabled'
      }
    }
  }



}

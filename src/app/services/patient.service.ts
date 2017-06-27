import { Patient } from './../models/patient';
import { GenericService } from './generic.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PatientService extends GenericService<Patient>{
  private url: string = ''
  constructor(@Inject(Http)http: Http) {
    super(http)
    this.url = 'http://localhost:3000/api/patient/'
   }
  public getAll(): Observable<Patient[]> {
    return super.getAll(this.url)
  }
  public create(patient: Patient): Observable<Patient> {
    return super.create(patient, `${this.url}`)
  }
  public startsWith(alpha: string): Observable<Patient[]> {
    return this.http.get(`${this.url}startsWith/${alpha}`)
    .map(res => res.json())
  }
  public search(text: string): Observable<Patient[]> {
    return this.http.get(`${this.url}search/${text}`)
    .map(res => res.json())
  }
  public getOne(id: string): Observable<Patient> {
    return super.getOne(`${this.url}${id}`)
  }
  public update(patient: Patient): Observable<Patient> {
    return super.update(patient, `${this.url}${patient._id}`)
  }
  public deleteOne(patient: Patient): Observable<Patient> {
    return super.deleteOne(patient, `${this.url}${patient._id}`)
  }
}

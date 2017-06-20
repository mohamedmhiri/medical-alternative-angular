import { Doctor } from './../models/doctor';
import { GenericService } from './generic.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DoctorService extends GenericService<Doctor>{
  private url: string = ''
  constructor(@Inject(Http)http: Http) {
    super(http)
    this.url = 'http://localhost:3000/api/doctor/'
   }
  getAll(): Observable<Doctor[]> {
    return super.getAll(this.url)
  }
  create(doctor: Doctor): Observable<Doctor> {
    return super.create(doctor, `${this.url}`)
  }
  startsWith(alpha: string): Observable<Doctor[]> {
    return this.http.get(`${this.url}startsWith/${alpha}`)
    .map(res => res.json())
  } 
}

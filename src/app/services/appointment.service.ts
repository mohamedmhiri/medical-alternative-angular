import { Appointment } from './../models/appointment';
import { GenericService } from './generic.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppointmentService extends GenericService<Appointment>{
  private url: string = ''
  constructor(@Inject(Http)http: Http) {
    super(http)
    this.url = 'http://localhost:3000/api/appointment/'
   }
  public getAll(): Observable<Appointment[]> {
    return super.getAll(this.url)
  }
  public create(appointment: Appointment): Observable<Appointment> {
    return super.create(appointment, `${this.url}`)
  }
  public getOne(id: string): Observable<Appointment> {
    return super.getOne(`${this.url}${id}`)
  }
  public update(appointment: Appointment): Observable<Appointment> {
    return super.update(appointment, `${this.url}${appointment._id}`)
  }
  public deleteOne(appointment: Appointment): Observable<Appointment> {
    return super.deleteOne(appointment, `${this.url}${appointment._id}`)
  }
}

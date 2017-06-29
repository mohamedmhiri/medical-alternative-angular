import { Consultation } from './../models/consultation';
import { GenericService } from './generic.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ConsultationService extends GenericService<Consultation>{
  private url: string = ''
  constructor(@Inject(Http)http: Http) {
    super(http)
    this.url = 'http://localhost:3000/api/consultation/'
   }
  public getAll(): Observable<Consultation[]> {
    return super.getAll(this.url)
  }
  public create(consultation: Consultation): Observable<Consultation> {
    return super.create(consultation, `${this.url}`)
  }
  public getOne(id: string): Observable<Consultation> {
    return super.getOne(`${this.url}${id}`)
  }
  public update(consultation: Consultation): Observable<Consultation> {
    return super.update(consultation, `${this.url}${consultation._id}`)
  }
  public deleteOne(consultation: Consultation): Observable<Consultation> {
    return super.deleteOne(consultation, `${this.url}${consultation._id}`)
  }
}

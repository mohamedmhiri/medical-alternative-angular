import { Treatment } from './../models/treatment';
import { GenericService } from './generic.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TreatmentService extends GenericService<Treatment>{
  private url: string = ''
  constructor(@Inject(Http)http: Http) {
    super(http)
    this.url = 'http://localhost:3000/api/treatment/'
   }
  public getAll(): Observable<Treatment[]> {
    return super.getAll(this.url)
  }
  public create(treatment: Treatment): Observable<Treatment> {
    return super.create(treatment, `${this.url}`)
  }
  public getOne(id: string): Observable<Treatment> {
    return super.getOne(`${this.url}${id}`)
  }
  public update(treatment: Treatment): Observable<Treatment> {
    return super.update(treatment, `${this.url}${treatment._id}`)
  }
  public deleteOne(treatment: Treatment): Observable<Treatment> {
    return super.deleteOne(treatment, `${this.url}${treatment._id}`)
  }
}

import { Decision } from './../models/decision';
import { GenericService } from './generic.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DecisionService extends GenericService<Decision>{
  private url: string = ''
  constructor(@Inject(Http)http: Http) {
    super(http)
    this.url = 'http://localhost:3000/api/decision/'
   }
  public getAll(): Observable<Decision[]> {
    return super.getAll(this.url)
  }
  public create(decision: Decision): Observable<Decision> {
    return super.create(decision, `${this.url}`)
  }
  public getOne(id: string): Observable<Decision> {
    return super.getOne(`${this.url}${id}`)
  }
  public update(decision: Decision): Observable<Decision> {
    return super.update(decision, `${this.url}${decision._id}`)
  }
  public deleteOne(decision: Decision): Observable<Decision> {
    return super.deleteOne(decision, `${this.url}${decision._id}`)
  }
}

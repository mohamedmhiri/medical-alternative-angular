import { Test } from './../models/test';
import { GenericService } from './generic.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService extends GenericService<Test>{
  private url: string = ''
  constructor(@Inject(Http)http: Http) {
    super(http)
    this.url = 'http://localhost:3000/api/test/'
   }
  public getAll(): Observable<Test[]> {
    return super.getAll(this.url)
  }
  public create(test: Test): Observable<Test> {
    return super.create(test, `${this.url}`)
  }
  public getOne(id: string): Observable<Test> {
    return super.getOne(`${this.url}${id}`)
  }
  public update(test: Test): Observable<Test> {
    return super.update(test, `${this.url}${test._id}`)
  }
  public deleteOne(test: Test): Observable<Test> {
    return super.deleteOne(test, `${this.url}${test._id}`)
  }
}

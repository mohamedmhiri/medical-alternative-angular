import { Antecedant } from './../models/antecedant';
import { GenericService } from './generic.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AntecedantService extends GenericService<Antecedant>{
  private url: string = ''
  constructor(@Inject(Http)http: Http) {
    super(http)
    this.url = 'http://localhost:3000/api/antecedant/'
   }
  public getAll(): Observable<Antecedant[]> {
    return super.getAll(this.url)
  }
  public create(antecedant: Antecedant): Observable<Antecedant> {
    return super.create(antecedant, `${this.url}`)
  }
  public getOne(id: string): Observable<Antecedant> {
    return super.getOne(`${this.url}${id}`)
  }
  public update(antecedant: Antecedant): Observable<Antecedant> {
    return super.update(antecedant, `${this.url}${antecedant._id}`)
  }
  public deleteOne(antecedant: Antecedant): Observable<Antecedant> {
    return super.deleteOne(antecedant, `${this.url}${antecedant._id}`)
  }
}

import { Availability } from './../models/availability';
import { GenericService } from './generic.service';
import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AvailabilityService extends GenericService<Availability>{
  private url: string = ''
  constructor(@Inject(Http)http: Http) {
    super(http)
    this.url = 'http://localhost:3000/api/availability/'
   }
  public getAll(): Observable<Availability[]> {
    return super.getAll(this.url)
  }
  public create(availability: Availability): Observable<Availability> {
    return super.create(availability, `${this.url}`)
  }
  public getOne(id: string): Observable<Availability> {
    return super.getOne(`${this.url}${id}`)
  }
  public update(availability: Availability): Observable<Availability> {
    return super.update(availability, `${this.url}${availability._id}`)
  }
  public deleteOne(availability: Availability): Observable<Availability> {
    return super.deleteOne(availability, `${this.url}${availability._id}`)
  }
}

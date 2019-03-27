import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThingsResponse } from '@app/things/models/things-response.model';
import { HttpClient } from '@angular/common/http';
import { ThingResponse } from '@app/things/models/thing-response.model';
import { ThingRequest } from '@app/things/models/thing-request.model';

@Injectable({
  providedIn: 'root'
})
export class ThingsService {

  constructor(
    private http: HttpClient
  ) { }

  public getThings(): Observable<ThingsResponse> {
    return this.http.get<ThingsResponse>('/things', {
      params: {
        sort_by: '_id',
        order_by: 'desc'
      }
    });
  }

  public addThing(thingRequest: ThingRequest): Observable<ThingResponse> {
    return this.http.post<ThingResponse>('/things', thingRequest);
  }

  public deleteThing(id: string): Observable<any> {
    return this.http.delete(`/things/${id}`);
  }
}

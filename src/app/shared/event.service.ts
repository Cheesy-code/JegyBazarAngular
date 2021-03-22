import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventModel } from './event-model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  [x: string]: any;
  // private _events = <any>EventModel;

  constructor(private _http: HttpClient) {
    // this._events = this._getMockData();
  }

  getAllEvents(): Observable<EventModel[]> {
    return this._http.get(`${environment.firebase.baseURL}/events.json`)
      .pipe(
        map(data => Object.values(data).map(evm => new EventModel(evm)))
      );
  }

  getEventById(id: number) {
    // const ev = this._events.filter((x: { id: number; }) => x.id === +id);
    // return ev.length > 0 ? ev[0] : new EventModel(EventModel.emptyEvent);
    return this._http.get<EventModel>(`${environment.firebase.baseURL}/events/${id}.json`);
  }

  save(param: EventModel) {
    console.log(param);
    if (param.id) {
      return this._http.put(`${environment.firebase.baseURL}/events/${param.id}.json`, param);
    } else {
      return this._http.post(`${environment.firebase.baseURL}/events.json`, param);
    }
  }

  delete(param: EventModel) {
    return this._http.delete(`${environment.firebase.baseURL}/events/${param.id}.json`);
  }
}
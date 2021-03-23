import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventModel } from './event-model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

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
      .map(data => Object.values(data).map(evm => new EventModel(evm)));
  }

  getEventById(id: string) {
    return this._http.get<EventModel>(`${environment.firebase.baseURL}/events/${id}.json`);
  }

  save(param: EventModel) {
    console.log(param);
    if (param.id) { // udpate ag
      return this._http.put(`${environment.firebase.baseURL}/events/${param.id}.json`, param);
    } else { // create ag
      return this._http
        .post<{ name: string }>(`${environment.firebase.baseURL}/events.json`, param)
        .map((fbPostReturn: { name: string }) => fbPostReturn.name)
        .switchMap(fbId => this._http.patch(
          `${environment.firebase.baseURL}/events/${fbId}.json`,
          { id: fbId }
        )
        );
    }
  }

  // TODO: itt kitalalni, hogy hogyan akarjuk kezelni a fuggosegeket es aszerint implementalni
  delete(param: EventModel) {
    return this._http.delete(`${environment.firebase.baseURL}/events/${param.id}.json`);
  }

  addTicket(eventId: string, ticketId: string): Observable<string> {
    return this._http.patch(
      `${environment.firebase.baseURL}/events/${eventId}/tickets.json`,
      { [ticketId]: true }
    )
      .map(rel => Object.keys(rel)[0]);
  }
}
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

  update(param: EventModel) {
    // this._events = this._events.map((ev: { id: number; }) => ev.id === param.id ? { ...param } : ev);
  }

  create(param: EventModel) {
    // this._events = [
    //   ...this._events,
    //   {
    //     id: this._getMax() + 1,
    //     ...param
    //   }
    // ];
  }

  // private _getMax() {
  //   return this._events.reduce((x: { id: number; }, y: { id: number; }) => x.id > y.id ? x : y).id;
  // }

  // private _getMockData() {
  //   return [
  //     new EventModel({
  //       'id': 1,
  //       'name': 'Sziget Fesztivál',
  //       'date': '2017-08-03',
  //       'pictureURL': 'assets/sziget.png',
  //       'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
  //     }),
  //     new EventModel({
  //       'id': 2,
  //       'name': 'Diótörő Balett',
  //       'date': '2017-11-23',
  //       'pictureURL': 'assets/diotoro.jpg',
  //       'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
  //     }),
  //     new EventModel({
  //       'id': 3,
  //       'name': 'Macskák Musical',
  //       'date': '2018-02-11',
  //       'pictureURL': 'assets/macskak.jpg',
  //       'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.'
  //     }),
  //     new EventModel({
  //       'id': 4,
  //       'name': 'Fezen',
  //       'date': '2017-08-03',
  //       'pictureURL': 'https://tixa.hu/kepek/0007/7009-1_20181206160317.jpg',
  //       'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
  //     }),
  //     new EventModel({
  //       'id': 5,
  //       'name': 'SZIN',
  //       'date': '2017-08-03',
  //       'pictureURL': 'https://www.koncert.hu/uploads/concerts/koncert-20140625-11470-szin_2014_2.jpg',
  //       'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
  //     }),
  //     new EventModel({
  //       'id': 6,
  //       'name': 'Rockmaraton',
  //       'date': '2017-08-03',
  //       'pictureURL': 'https://rockmaraton.hu/images/rockmaraton-xxx-og-image-hu.jpg',
  //       'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
  //     }),
  //     new EventModel({
  //       'id': 7,
  //       'name': 'Black Hat USA',
  //       'date': '2017-08-03',
  //       'pictureURL': 'https://www.blackhat.com/images/page-graphics/metatag/event-logo-us17.png',
  //       'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
  //     }),
  //     new EventModel({
  //       'id': 8,
  //       'name': 'TEDx',
  //       'date': '2017-08-03',
  //       'pictureURL': 'https://i0.wp.com/www.tedxwellington.com/wp-content/uploads/2017/02/tedx-bulb.jpg',
  //       'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
  //     }),
  //     new EventModel({
  //       'id': 9,
  //       'name': 'ng-conf',
  //       'date': '2017-08-03',
  //       'pictureURL': 'https://cdn-images-1.medium.com/max/1270/1*2j7MOWb0s5pZpQLu7d-5CQ.png',
  //       'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
  //     })
  //   ]
  // }

}
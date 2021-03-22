import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { environment } from 'src/environments/environment';
import { TicketModel } from './ticket-model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private _tickets = <any>TicketModel;

  constructor(private _http: HttpClient) {
    //this._tickets = this._getMockData();
  }

  getAllTickets(): Observable<TicketModel[]> {
    return this._http.get(`${environment.firebase.baseURL}/tickets.json`)
      .pipe(
        map(data => Object.values(data).map(ticm => new TicketModel(ticm)))
      );
  }

  create(param: TicketModel) {
    // this._tickets = [
    //   ...this._tickets,
    //   new TicketModel({
    //     id: this._tickets.reduce((x: { id: number; }, y: { id: number; }) => x.id > y.id ? x : y).id + 1,
    //     ...param,
    //     event: this._eventService.getEventById(param.eventId),
    //     seller: this._userService.getUserById(param.sellerUserId)
    //   })
    // ];
    // console.log(this._tickets);
  }
}

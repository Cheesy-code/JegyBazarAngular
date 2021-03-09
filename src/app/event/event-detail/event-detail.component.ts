import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventModel } from 'src/app/shared/event-model';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event = <any>EventModel;

  constructor(private _route: ActivatedRoute, private _eventService: EventService) { }

  ngOnInit(): void {
    const evId = +this._route.snapshot.params['id'];
    if (evId) {
      this.event = this._eventService.getEventById(evId);
      console.log("Megkaptuk eventId-t", evId);
      console.log("kaptunk eventet", this.event);
    } else {
      this.event = new EventModel(EventModel.emptyEvent);
      console.log("nem kaptunk eventet...csináltunk egyet");
    }
  }

  onSubmit(form: any) {
    console.log('formvalue: ', form);
    console.log('event', this.event);
  }

}

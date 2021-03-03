import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/shared/event-model';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
//Ez jó példa lehet smart és dumb componentre.

  public events!: EventModel[];

  constructor(private _eventService: EventService) {
    this.events = this._eventService.getAllEvents();
    console.log(this.events);
   }

  ngOnInit(): void {
  }

}

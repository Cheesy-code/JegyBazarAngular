import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventModel } from 'src/app/shared/event-model';
import { EventService } from 'src/app/shared/event.service';
import { Location } from '@angular/common';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event = <any>EventModel;
  editForm = false;

  constructor(private _route: ActivatedRoute, private _eventService: EventService,
    private _location: Location, public userService: UserService) {
  }

  ngOnInit(): void {
    const evId = +this._route.snapshot.params['id'];
    if (evId) {
      this.event = this._eventService.getEventById(evId);
      console.log("Megkaptuk eventId-t", evId);
      console.log("kaptunk eventet", this.event);
    } else {
      this.event = new EventModel(EventModel.emptyEvent);
      this.editForm = true;
      console.log("nem kaptunk eventet...csináltunk egyet");
    }
  }

  onSubmit(form: any) {
    if (this.event.id) {
      console.log('updateban vagyunk');
      this._eventService.update(this.event);
    } else {
      console.log('create ágban vagyunk');
      this._eventService.create(this.event);
    }
    this._location.back();
  }

  navigateBack() {
    this._location.back();
  }
}

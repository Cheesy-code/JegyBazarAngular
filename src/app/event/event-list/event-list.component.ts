import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/shared/user.service';
import { EventModel } from '../../shared/event-model';
import { EventService } from '../../shared/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  // ez jo pelda lehet smart es dumb componentre
  public eventsGrouppedBy3 = <any>EventModel;
  public events$!: Observable<EventModel[]>;
  public event!: EventModel[];
  public eventsGrouppedBy3$!: Observable<EventModel[][]>;

  constructor(private _eventService: EventService,
    public userService: UserService) {
  }

  ngOnInit() {
    this.eventsGrouppedBy3$ = this._eventService.getAllEvents()
      .map((data: any[]) => {
          return data.reduce((acc: Array<any>, curr: EventModel, ind: number) => {
            if (ind % 3 === 0) {
              acc.push([]);
            }
            acc[acc.length - 1].push(curr);
            return acc;
          }, []);
        });
  }
}

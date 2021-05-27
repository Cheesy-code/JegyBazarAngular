import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { EventModel } from '../../shared/event-model';
import { EventService } from '../event.service';
import { UserService } from '../../shared/user.service';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/distinctUntilChanged';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit, AfterViewInit, OnDestroy {
  public events: EventModel[];
  isLoggedIn: boolean;
  @ViewChild('searchInput') searchInput: ElementRef;
  private filteredText$ = new BehaviorSubject<string>(null);
  private eventSubscription: Subscription;
  private isLoggedInSubscription: Subscription;

  constructor(private _eventService: EventService, public userService: UserService, private cdr: ChangeDetectorRef) {
    this.isLoggedInSubscription = userService.isLoggedIn$.subscribe(
      isLoggedIn => this.isLoggedIn = isLoggedIn
    );
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
    this.isLoggedInSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    console.log(this.searchInput);
    Observable.fromEvent(this.searchInput.nativeElement, 'keyup')
      .delay(600)
      .map(
        (event: Event) => {
          return (event.srcElement as HTMLInputElement).value;
        }
      )
      .distinctUntilChanged()
      .subscribe(
        text => {
          if (text.length === 0) {
            text = null;
          }
          this.filteredText$.next(text);
        }
      );
    this.cdr.detach();
  }

  ngOnInit() {
    this.eventSubscription = this._eventService.getAllEvents()
      .flatMap(
        events => {
          return this.filteredText$.map(
            filterText => {
              if (filterText === null) {
                return events;
              } else {
                return events.filter(
                  event => {
                    return event.name.toLowerCase().indexOf(filterText.toLowerCase()) > -1;
                  }
                );
              }
            }
          );
        }
      ).subscribe(
        events => {
          this.events = events;
          this.cdr.detectChanges();
        }
      )
  }
}
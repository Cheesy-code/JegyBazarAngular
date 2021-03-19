import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventModel } from 'src/app/shared/event-model';
import { EventService } from 'src/app/shared/event.service';
import { TicketModel } from 'src/app/shared/ticket-model';
import { TicketService } from 'src/app/shared/ticket.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  ticket = <any>TicketModel;
  events = <any>EventModel;

  constructor(private _ticketService: TicketService,
    private _eventService: EventService,
    private _userService: UserService,
    private _router: Router) {
  }

  ngOnInit(): void {
    this.ticket = new TicketModel(TicketModel.emptyTicket);
    this.ticket.sellerUserId = this._userService.getCurrentUser().id;
    // this.events = this._eventService.getAllEvents();
  }

  onSubmit() {
    console.log(this.ticket);
    this._ticketService.create(this.ticket);
    this._router.navigate(['/ticket']);
  }

}

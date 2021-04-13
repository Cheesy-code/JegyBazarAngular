import { Component, OnInit } from '@angular/core';
import { TicketModel } from '../../shared/ticket-model';
import { TicketService } from '../../shared/ticket.service';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  ticket: TicketModel;
  isLoggedIn: boolean;

  constructor(private _ticketService: TicketService,
              userService: UserService) {
    this.isLoggedIn = userService.isLoggedin;
  }

  ngOnInit() {
    const id = '-Ky0HolLJBH3Q5uVHWZf';
    this._ticketService.getOne(id).subscribe(
      ticket => this.ticket = ticket
    );
  }
}

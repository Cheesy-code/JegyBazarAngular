import { Component, OnInit } from '@angular/core';
import { TicketModel } from 'src/app/shared/ticket-model';
import { TicketService } from 'src/app/shared/ticket.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  public tickets = <any>TicketModel

  constructor(private _ticketService: TicketService, private _userService: UserService) { 

  }

  ngOnInit(): void {
    this.tickets = this._ticketService.getAllTickets();
    console.log(this.tickets);
  }

}

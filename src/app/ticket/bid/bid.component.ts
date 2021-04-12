import { Component, OnInit } from '@angular/core';
import { TicketModel } from '../../shared/ticket-model';
import { TicketService } from '../../shared/ticket.service';

@Component({
  selector: 'app-bid',
  templateUrl: './bid.component.html',
  styleUrls: ['./bid.component.css']
})
export class BidComponent implements OnInit {
  ticket: TicketModel;

  constructor(private _ticketService: TicketService) { }

  ngOnInit() {
    const id = '-MVvH3-hDu-6AANEVXBj';
    this._ticketService.getOne(id).subscribe(
      ticket => this.ticket = ticket
    );
  }

}

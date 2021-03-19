import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
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
  public tickets$!: Observable<TicketModel[]>;
  public ticket!: TicketModel[];
  public ticketsGrouppedBy3$!: Observable<TicketModel[][]>;

  constructor(private _ticketService: TicketService, public userService: UserService) { 

  }

  ngOnInit(): void {
    this.ticketsGrouppedBy3$ = this._ticketService.getAllTickets()
      .pipe(
        map((data: any[]) => {
          return data.reduce((acc: TicketModel[][], curr: TicketModel, ind: number) => {
            if (ind % 3 === 0) {
              acc.push([]);
            }
            acc[acc.length - 1].push(curr);
            return acc;
          }, []);
        }));
  }

}

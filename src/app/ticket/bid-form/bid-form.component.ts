import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TicketModel } from '../../shared/ticket-model';
import { bidMinimumValidator } from './bid.validators';

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})
export class BidFormComponent implements OnInit {
  @Input() ticket: TicketModel;
  @Output() bidWithBidStep = new EventEmitter<void>();
  displayBidStep = true;
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        // bid: [null, Validators.required]
        bid: [null, Validators.compose([Validators.required, bidMinimumValidator(this.ticket.currentBid + this.ticket.bidStep)])]
      }
    );
  }

  onSubmit() {
    console.log("Licitálás történt");
    console.log(this.form.value);
    console.log(this.form.valid);
    this.submitted = true;
  }

  onBidWithBidStep() {
    this.bidWithBidStep.emit();
  }

  displayBidWithStep($event: Event) {
    $event.preventDefault();

    this.displayBidStep = false
  }
}


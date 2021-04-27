import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BidService } from '../../shared/bid.service';
import { TicketModel } from '../../shared/ticket-model';
import { bidMinimumValidator } from './bid.validators';

@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.css']
})
export class BidFormComponent implements OnInit {
  @Input() ticket: TicketModel;
  @Output() bid = new EventEmitter<void>();
  displayBidStep = true;
  form: FormGroup;
  submitted = false;
  submitSuccessAlert = false;
  submitErrorAlert = false;

  constructor(private _fb: FormBuilder, private _bidService: BidService) {

  }

  ngOnInit(): void {
    this.form = this._fb.group(
      {
        // bid: [null, Validators.required]
        bid: [null, Validators.compose([Validators.required, bidMinimumValidator(this.ticket.currentBid + this.ticket.bidStep)])]
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.submitSuccessAlert = false;
    this.submitErrorAlert = false;
    if (this.form.valid) {
      this.toBid(this.form.value['bid'])
        .subscribe(
          () => {
            this.submitted = false;
            this.form.reset({ bid: null });
            //notification user
            this.submitSuccessAlert = true;
            //TODO emit output bid
          },
          err => {
            console.error(err);
            this.submitErrorAlert = true;
          }
        );
    }
    console.log("Licitálás történt");
    console.log(this.form.value);
    console.log(this.form.valid);
  }

  onBidWithBidStep() {
    this.toBid(this.ticket.currentBid+this.ticket.bidStep)
    .subscribe(
      () => {
        //notification user
        this.submitSuccessAlert = true;
        this.bid.emit();
      },
      err => {
        console.error(err);
        this.submitErrorAlert = true;
      }
    );
  }
  toBid(value: number) {
    return this._bidService.bid(this.ticket.id, value);
  }

  displayBidWithStep($event: Event) {
    $event.preventDefault();

    this.displayBidStep = false
  }
}


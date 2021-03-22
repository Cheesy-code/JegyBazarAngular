import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs-compat';
import { UserModel } from 'src/app/shared/user-model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user = <any>UserModel;
  private _subs!: Subscription;

  constructor(private _userService: UserService) {
  }

  ngOnInit(): void {
    this._subs = this._userService.getCurrentUser().subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    // csak hogy legyen ilyen is
    this._subs.unsubscribe();
  }
}

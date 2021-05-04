import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../../shared/user-model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user$: Observable<UserModel>;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.user$ = this._userService.getCurrentUser();
  }
}

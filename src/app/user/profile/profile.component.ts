import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/shared/user-model';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = <any>UserModel;

  constructor(private _userService: UserService) {
  }

  ngOnInit(): void {
    this.user = this._userService.getCurrentUser();
  }
}

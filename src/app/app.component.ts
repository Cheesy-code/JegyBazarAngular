import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn$: ReplaySubject<boolean>;

  constructor(userService: UserService) {
    this.isLoggedIn$ = userService.isLoggedIn$;
  }
}
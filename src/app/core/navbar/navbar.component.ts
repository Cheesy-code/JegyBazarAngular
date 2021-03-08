import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
  }
}

export class CollapseDemoAnimatedComponent {
  isCollapsed = false;
}

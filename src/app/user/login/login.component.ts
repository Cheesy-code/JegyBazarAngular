import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error: string | undefined;

  constructor(private _userService: UserService,
    private _router: Router) {
  }

  ngOnInit(): void {
  }

  login(email: string, password: string) {
    if (!this._userService.login(email, password)) {
      this.error = 'Hiba a belépési adatokban. Próbáld újra vagy igály egy kávét.';
    } else {
      this._router.navigate(['/user']);
    }
  }

  clearError() {
    delete (this.error);
  }

}

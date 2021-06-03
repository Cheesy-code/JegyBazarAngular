import { AfterViewInit, ChangeDetectorRef, Component, Output } from '@angular/core';
import { transition } from '@angular/core/src/animation/dsl';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  public isCollapsed = true;
  isLoggedIn = false;
  isCollapsedLanguageSwicher = true;
  currentLang = 'hu';

  constructor(
    public userService: UserService,
    private cdr: ChangeDetectorRef,
    private translateService: TranslateService
  ) {
    this.userService.isLoggedIn$.subscribe(
      isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
        this.cdr.detectChanges();
      }
    );

    translateService.onLangChange.subscribe(
      newLang => {
        this.currentLang = newLang.lang;
        this.isCollapsedLanguageSwicher = true;
        cdr.detectChanges();
      }
    );

  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }

  logout() {
    this.userService.logout();
  }

  toggleLanguageSwicher($event) {
    $event.stopPropagation();
    $event.preventDefault();

    this.isCollapsedLanguageSwicher = !this.isCollapsedLanguageSwicher;
    this.cdr.detectChanges();
  }

  selectLang(lang: string, $event) {
    $event.stopPropagation();
    $event.preventDefault();

    this.translateService.use(lang);
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
    this.cdr.detectChanges();
  }

}

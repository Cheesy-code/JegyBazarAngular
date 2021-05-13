import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NavBarItemComponent } from './nav-bar-item/nav-bar-item.component';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    JumbotronComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    NavBarItemComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    JumbotronComponent
  ]
})
export class CoreModule { }

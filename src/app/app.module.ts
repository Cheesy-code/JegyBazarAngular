import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule, CollapseModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EventcardComponent } from './event/eventcard/eventcard.component';
import { FooterComponent } from './core/footer/footer.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { EventService } from './shared/event.service';
import { UserService } from './shared/user.service';
import { TicketService } from './shared/ticket.service';
import { LoggedInGuardGuard } from './shared/logged-in-guard.guard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth-interceptor';
import { TicketDetailsCardComponent } from './ticket/ticket-details-card/ticket-details-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    EventcardComponent,
    FooterComponent,
    ...AppRoutingModule.routableComponents,
    TicketDetailsCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    EventService,
    UserService,
    TicketService,
    LoggedInGuardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

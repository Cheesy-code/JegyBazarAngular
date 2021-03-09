import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventcardComponent } from './event/eventcard/eventcard.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { JumbotronComponent } from './core/jumbotron/jumbotron.component';
import { FooterComponent } from './core/footer/footer.component';
import { EventService } from './shared/event.service';
import { UserService } from './shared/user.service';
import { TicketService } from './shared/ticket.service';
import { LoggedInGuard } from './shared/logged-in.guard';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    EventcardComponent,
    FooterComponent,
    ...AppRoutingModule.routableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, 
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [TicketService, EventService, UserService, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

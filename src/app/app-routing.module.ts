import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { EventComponent } from "./event/event.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RegistrationComponent } from "./registration/registration.component";
import { TicketComponent } from "./ticket/ticket.component";
import { EventListComponent } from "./event/event-list/event-list.component";
import { EventDetailComponent } from "./event/event-detail/event-detail.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProfileEditComponent } from "./profile-edit/profile-edit.component";
import { TicketListComponent } from "./ticket-list/ticket-list.component";
import { TicketDetailComponent } from "./ticket-detail/ticket-detail.component";
import { BidComponent } from "./bid/bid.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'event',
    component: EventComponent,
    children: [
      { path: 'list', component: EventListComponent },
      { path: 'new', component: EventDetailComponent },
      { path: ':id', component: EventDetailComponent }
    ]
  },
  {
    path: 'ticket',
    component: TicketComponent,
    children: [
      { path: 'list', component: TicketListComponent },
      { path: 'new', component: TicketDetailComponent },
      { path: ':id/bid', component: TicketDetailComponent }
    ]
  },
  { path: 'about', component: AboutComponent },  
  {
    path: 'user',
    children: [
      { path: '', component: ProfileComponent },
      { path: 'edit', component: ProfileEditComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  static routableComponent = [
    HomeComponent,
    EventComponent,
    EventListComponent,
    EventDetailComponent,
    TicketComponent,
    TicketListComponent,
    TicketDetailComponent,
    AboutComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    ProfileEditComponent,
    PageNotFoundComponent
  ];
}

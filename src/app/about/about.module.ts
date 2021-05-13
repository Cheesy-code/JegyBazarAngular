import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { CoreModule } from '../core/core.module';
import { AboutComponent } from './about.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    CoreModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }

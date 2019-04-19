import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountFormComponent } from './account-form/account-form.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './team/team.component';
import {MatCardModule, MatToolbarModule} from '@angular/material';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [AccountFormComponent, TeamComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    PagesRoutingModule,
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    CarouselModule
  ]
})
export class PagesModule { }

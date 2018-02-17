import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { dashboardRouting } from './dashboard.routing';
import { DashboardComponent } from './dashboard.component';
import { UsersComponent } from './users/users.component';
import { ModalModule } from '../modal/modal.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    dashboardRouting
  ],
  declarations: [
    DashboardComponent,
    UsersComponent
  ]
})
export class DashboardModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRouting } from './dashboard.routes'
import { DashboardComponent } from './dashboard.component'

import { MenuComponent } from '../menu/menu.component';
import { UsersComponent } from '../users/users.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRouting
  ],
  declarations: [
    MenuComponent,
    DashboardComponent,
    UsersComponent
  ]
})
export class DashboardModule { }

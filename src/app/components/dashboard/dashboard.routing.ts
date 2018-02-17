import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { UsersComponent } from "./users/users.component";

const APP_ROUTES: Routes = [
  { path: '', component: DashboardComponent, children: [
      {path: '', redirectTo: 'usuarios'},
      {path: 'usuarios', component: UsersComponent}
  ] },
];

export const dashboardRouting = RouterModule.forChild(APP_ROUTES)

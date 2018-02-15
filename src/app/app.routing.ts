import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "../app/components/login/login.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true })
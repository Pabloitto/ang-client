import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "../app/components/login/login.component";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', loadChildren: 'app/components/dashboard/dashboard.module#DashboardModule'  }
];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true })

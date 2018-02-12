import  {Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { UsersComponent } from "../users/users.component";

const DASHBOARD_ROUTES: Routes = [
    {path: '', component: DashboardComponent, children:[
        { path: '', redirectTo: 'users' },
        {path: 'users' , component: UsersComponent},
    ]}
];

export const DashboardRouting = RouterModule.forChild(DASHBOARD_ROUTES);

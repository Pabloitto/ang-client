import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { routing } from './app.routing'
import { ModalComponent } from './components/modal/modal.component';
import { MainComponent } from './components/main/main.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    ModalComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }

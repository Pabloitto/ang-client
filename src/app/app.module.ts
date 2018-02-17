import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './components/login/login.component';
import { routing } from './app.routing'
import { MainComponent } from './components/main/main.component';
import { ModalModule } from './components/modal/modal.module';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@NgModule({
  declarations: [
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule,
    routing
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }

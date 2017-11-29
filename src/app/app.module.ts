import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ThemeModule } from './theme/theme.module';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CapitalizePipe } from './core/pipes/capitalize.pipe';

export const firebaseConfig = {
  apiKey: environment.apiKeys.Firebase.apiKey,
  authDomain: environment.apiKeys.Firebase.authDomain,
  databaseURL: environment.apiKeys.Firebase.databaseURL,
  storageBucket: environment.apiKeys.Firebase.storageBucket,
  messagingSenderId: environment.apiKeys.Firebase.messagingSenderId
};


@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    ThemeModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

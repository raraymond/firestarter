import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

// 2. Add your credentials from step 1
const config = {
  apiKey: 'AIzaSyAWmUWHyP8e5WMc2lDYJgMzPNg4MhtjOdM',
  authDomain: 'firestarter-b28bf.firebaseapp.com',
  databaseURL: 'https://firestarter-b28bf.firebaseio.com',
  projectId: 'firestarter-b28bf',
  storageBucket: 'firestarter-b28bf.appspot.com',
  messagingSenderId: '985038798381',
  appId: '1:985038798381:web:7538e4d96534e58ed642a4',
  measurementId: 'G-L2XEBM02W7',
};

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

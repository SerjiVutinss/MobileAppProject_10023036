import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

// Storage
import { IonicStorageModule } from '@ionic/storage';

// Firebase + AngularFire
import { AngularFireModule,  } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
// Private Firebase configuration settings 
//    - must be manually created, note in README.MD
import { firebaseConfig } from '../firebase-config';
// Custom AngularFire Authentication Provider
import { AfAuthProvider } from '../providers/af-auth/af-auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";
import { WildflowersProvider } from '../providers/wildflowers/wildflowers';
import { WildflowerImagesProvider } from '../providers/wildflower-images/wildflower-images';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot({
      name: '__app.db',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireAuth,
    AfAuthProvider,
    WildflowersProvider,
    WildflowerImagesProvider
  ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule, SwUpdate, SwPush } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(swUpdate: SwUpdate, swPush: SwPush, snackbar: MatSnackBar) {
    console.log('App Module');
    swUpdate.available.subscribe((update) => {
      console.log('update available', update);

      // Allow the user to refresh
      const snack = snackbar.open('Update Available', 'Reload');

      snack
        .onAction()
        .subscribe(() => {
          window.location.reload();
        });

      swPush.messages.subscribe((message) => {
        console.log(message);
        snackbar.open(JSON.stringify(message));
      });

      console.log('public key', environment.serviceWorkerOptions.vap.publicKey);

      swPush.requestSubscription({
        serverPublicKey: environment.serviceWorkerOptions.vap.publicKey
      })
        .then(pushSubscription => {
          console.log(pushSubscription.toJSON());
        });
    });
  }
}

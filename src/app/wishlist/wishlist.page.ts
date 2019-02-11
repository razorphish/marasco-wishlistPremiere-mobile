import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styles: ['wishlist.page.scss']
})
export class WishlistPage implements OnInit {

  constructor(private _push: SwPush) { }

  ngOnInit() {
  }

  subscribeToWishlist() {
    this._push.requestSubscription({
      serverPublicKey: environment.serviceWorkerOptions.vap.publicKey
    })
      .then((subscription) => {
        // Log / save to database
        console.log('Notification Subscription', subscription);
      })
      .catch((error) => {
        console.error('Could not subscribe to notifications', error);
      });
  }
}

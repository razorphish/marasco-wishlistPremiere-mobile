// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  debug: true,

  serviceWorkerOptions : {
    vap: {
      publicKey: 'BDCIWOBrQvMpw0lY7p87qO-HkSxGAunOAj9sInXZCJ42GRrj1nmd7zUyFdfaoOPolKJfvHIvzfyv0D25uWh0ydQ',
      privateKey: 'omSWGpqwpFKJZGkhuUXrUNuLt6cG0uq_MMgz8L5DPKc'
    }
  },

  log: {
    auth: true,
    store: true,
  },

  marasco: {
    api: null,
    db: 'wishlist-premiere-mobile'
  },

  clientId: 'wishlist-mobile-ui',
  clientSecret: 'gbUJGCTin19mKfp24ZODrWJQWgCsRpz4ZPCSdI48r5vBMUBMdbtfOSK9u' +
  'QI4Aljko911aerffIZg9Wruidt3M78J6qji598eoKo9xkiKSKto0eemRq2xiQacm9nL5qCG' +
  'hfnFQZUCHQ597q1cI5MoCmMseBD49XPexoYfx5y0Oo2eBOgvZ6Ig8DHrv9LvzZYle6VEWIQ' +
  'rFBOFrPrezynlqGl632Sso3PLUu2kRRQWuOU52Ng6VhD7vqgnzgEawRj8',

  redirectUrl: '/dashboard',
  loginUrl:  '/auth/login',
  registerUrl: '/auth/register',
  resetPasswordUrl: '/auth/forgot-password',
  apiUrl: 'http://localhost:3002/api/',
  apiUrlAuth: 'http://localhost:3002/oauth/',
  application: '5c4b1303fc13ae60b4000003'
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

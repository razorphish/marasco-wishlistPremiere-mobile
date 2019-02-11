export const environment = {
  production: true,

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

  apiUrl: 'https://api.maras.co/api/',
  apiUrlAuth: 'https://api.maras.co/oauth/',
  application: '5c4b1303fc13ae60b4000003'
};

ynpx cap open ios
npx cap open android

npx cap open ios
npx cap open android


ngx cap copy - after every build

ngx cap update - updates plugins : run after new plugin installation

ngx cap sync - does both update plugins and copy

npm install your-cordova-plugin
npx cap update

COMMANDS TO START PROJECT
==================================
ionic start ionic-v4-test --capacitor --type=angular
ng add @angular/pwa --project app


Logo Generator 
===============================
https://logojoy.com/

===============================
PWA
Icon Generator
https://realfavicongenerator.net/


SERVICE WORKER
===============================
https://app.pluralsight.com/player?course=building-offline-web-apps-service-worker&author=nik-molnar&name=building-offline-web-apps-service-worker-m4&clip=4&mode=live

Add to angular.json file
"src/service-worker.js" (under manifest => assets array)


NOTIFICATION
==============================
https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification



OTHER SNIPPETS
===========================================
[
  '/**',           // Include all URLs.
  '!/**/*.*',      // Exclude URLs to files.
  '!/**/*__*',     // Exclude URLs containing `__` in the last segment.
  '!/**/*__*/**',  // Exclude URLs containing `__` in any other segment.
]
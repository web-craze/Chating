// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// This is file that interaction between firebase and angular project

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBYFN9dPr2ovYaVOUbGh8fR4j9_Ai39CH8",
    authDomain: "sechat-a8e0e.firebaseapp.com",
    databaseURL: "https://sechat-a8e0e.firebaseio.com",
    projectId: "sechat-a8e0e",
    storageBucket: "sechat-a8e0e.appspot.com",
    messagingSenderId: "55530038716"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

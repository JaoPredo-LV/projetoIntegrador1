// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyClpUEensK-_McgAQ5HKi5o76O19yZSoJk",
  authDomain: "projetointegrador-7ed24.firebaseapp.com",
  databaseURL: "https://projetointegrador-7ed24-default-rtdb.firebaseio.com",
  projectId: "projetointegrador-7ed24",
  storageBucket: "projetointegrador-7ed24.firebasestorage.app",
  messagingSenderId: "784513977466",
  appId: "1:784513977466:web:532bbb46d90be7ff25ffc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
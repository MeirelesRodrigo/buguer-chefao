import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5d2cosc4Vhvt8kiWC20961knBHAYWy0E",
  authDomain: "portifolio-rodrigo-meireles.firebaseapp.com",
  projectId: "portifolio-rodrigo-meireles",
  storageBucket: "portifolio-rodrigo-meireles.firebasestorage.app",
  messagingSenderId: "433774643820",
  appId: "1:433774643820:web:06b763132fee4cd88e2649"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
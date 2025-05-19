import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp } from '@angular/fire/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// PRIMENG IMPORTS
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.my-app-dark'
        }
      }
    })
  ]
};

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
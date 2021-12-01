importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: 'AIzaSyCO6sVtvLWTWhURgbwTkBhGUBamfZeIKOo',
  authDomain: 'fir-cloud-messaging-a9470.firebaseapp.com',
  databaseURL: 'https://fir-cloud-messaging-a9470.firebaseio.com',
  projectId: 'fir-cloud-messaging-a9470',
  storageBucket: 'fir-cloud-messaging-a9470.appspot.com',
  messagingSenderId: '281453132916',
  appId: '1:281453132916:web:b1987b35176b404430a521',
});
const messaging = firebase.messaging();

import * as firebase from 'firebase';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyCO6sVtvLWTWhURgbwTkBhGUBamfZeIKOo',
  authDomain: 'fir-cloud-messaging-a9470.firebaseapp.com',
  databaseURL: 'https://fir-cloud-messaging-a9470.firebaseio.com',
  projectId: 'fir-cloud-messaging-a9470',
  storageBucket: 'fir-cloud-messaging-a9470.appspot.com',
  messagingSenderId: '281453132916',
  appId: '1:281453132916:web:b1987b35176b404430a521',
};

firebase.initializeApp(firebaseConfig);

export const pushNotificationsInit = () => {
  if (window.location.protocol !== 'https:') {
    return;
  }
  if (!('Notification' in window)) {
    alert('Этот браузер не поддерживает нотификацию');
  } else {
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => messaging.getToken())
      .then((token) => {
        console.log(1111);
        sessionStorage.setItem('firebaseToken', token);
      })
      .catch((error) => {
        throw new Error(error);
      });
    messaging.onMessage((payload) => {
      console.log(payload);
      const notification = new Notification(payload.priority, {
        body: payload.priority,
        icon: '',
      });
    });
  }
};

import * as firebase from 'firebase';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyDezWlrEuZygNS9NbIh8qIk4URkvOq1ZwM',
  authDomain: 'idatchik.firebaseapp.com',
  databaseURL: 'https://idatchik.firebaseio.com',
  projectId: 'idatchik',
  storageBucket: 'idatchik.appspot.com',
  messagingSenderId: '169158173801',
  appId: '1:169158173801:web:bfb08ea0e2639b326beef8',
  measurementId: 'G-SH6PDEHH7F',
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
        sessionStorage.setItem('firebaseToken', token);
      })
      .catch((error) => {
        throw new Error(error);
      });
    messaging.onMessage((payload) => {
      alert(payload.notification.body);
      const notification = new Notification(payload.notification.title, {
        body: payload.notification.body,
        icon: '',
      });
      alert(payload.notification.body);
    });
  }
};

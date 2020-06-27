import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBXM-nCiLJX7uj18s_oYFX0L_2KMm9-6GI',
  authDomain: 'https://i-kno-someone.firebaseapp.com',
  databaseURL: 'https://i-kno-someone.firebaseio.com',
  projectId: 'i-kno-someone',
  storageBucket: 'i-kno-someone.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: '1:173855589957:android:d5a5035a6f791d477e452c',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: ENV['API_KEU'],
  authDomain: ENV['AUTH_DOMAIN'],
  databaseURL: ENV['DATABASE_URL'],
  projectId: ENV['PROJECT_ID'],
  storageBucket: ENV['STORAGE_BUCKET'],
  messagingSenderId: ENV['MESSAGING_SENDER_ID'],
  appId: ENV['APP_ID'],
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
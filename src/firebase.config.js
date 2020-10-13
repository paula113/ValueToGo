import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDmYgIUH5dNoN2xNYBRt-3-UZohOM3fgYs',
  authDomain: 'value-to-go.firebaseapp.com',
  databaseURL: 'https://value-to-go.firebaseio.com',
  projectId: 'value-to-go',
  storageBucket: 'value-to-go.appspot.com',
  messagingSenderId: '995624225837',
  appId: '1:995624225837:web:bb67f48f1235a3699dfca4',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;

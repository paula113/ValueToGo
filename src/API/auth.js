import firebase from '../firebase.config';
import 'firebase/auth';

export const signIn = (email, password) => firebase
  .auth().signInWithEmailAndPassword(email, password);

export const signOut = () => firebase.auth().signOut();

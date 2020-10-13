import firebase from '../firebase.config';
import 'firebase/auth';

export const signIn = (email, password) => firebase
  .auth().signInWithEmailAndPassword(email, password);

export const signOut = () => firebase.auth().signOut();

const user = firebase.auth().currentUser;
export const emailVerification = () => user.sendEmailVerification().then(() => {
  console.log();
}).catch((error) => {
  console.log(error);
});

import { auth } from '../firebase.config';

export const signIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const signOut = () => auth.signOut();

const user = auth.currentUser;
export const emailVerification = () =>
  user
    .sendEmailVerification()
    .then(() => {
      console.log();
    })
    .catch((error) => {
      console.log(error);
    });

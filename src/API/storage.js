import firebase from '../firebase.config';
import 'firebase/storage';

// import 'firebase/storage';

const uploadImagePost = (file, uid) => {
  const refStorage = firebase.storage().ref(`documents/${uid}/${file.name}`);
  refStorage.put(file);
  return refStorage;
};
export { uploadImagePost };

import firebase from '../firebase.config';
import 'firebase/storage';

// import 'firebase/storage';

const uploadImagePost = (file, uid) => {
  const refStorage = firebase.storage().ref(`documents/${uid}/${file.name}`);
  refStorage.put(file);
  return refStorage;
};

const downloadFile = (cci) => {
  // Create a reference with an initial file path and name
  const storage = firebase.storage();
  //   const pathReference = storage.ref('images/stars.jpg');

  // Create a reference from a Google Cloud Storage URI
  const gsReference = storage.refFromURL(
    `gs://value-to-go.appspot.com/documents/${cci}`,
  );

  // Create a reference from an HTTPS URL
  // Note that in the URL, characters are URL escaped!
  //   const httpsReference = storage.refFromURL(
  //     'https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg',
  //   );
  gsReference.child('images/stars.jpg').getDownloadURL();
};
export { uploadImagePost, downloadFile };

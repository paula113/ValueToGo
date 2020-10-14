// import data from './data';
import firebase from '../firebase.config';

const publishData = (obj) =>
  firebase
    .firestore()
    .collection('puntosDeControl')
    .doc()
    .set(obj)
    .then((resp) => {
      console.log('se envio la orden con éxito');
      console.log(resp);
    })
    .catch((error) => {
      console.log('Ocurrió un error al enviar la order', error);
    });

const sendCCI = (arr) => {
  const iterable = arr.map((element) => publishData(element));
  Promise.all(iterable).then((values) => {
    console.log(values);
  });
};

const getADocument = (docID) => {
  const docRef = firebase.firestore().collection('puntosDeControl').doc(docID);

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log('Document data:', doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};
const getAllDocuments = () => {
  firebase
    .firestore()
    .collection('puntosDeControl')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => doc.data()); // doc.data() is never undefined for query doc snapshots);
    });
};

const listenAllDocs = (callback) => {
  firebase
    .firestore()
    .collection('puntosDeControl')
    .doc()
    .onSnapshot((querySnapShot) => {
      const data = [];
      querySnapShot.forEach((doc) => {
        data.push(doc);
      });
      callback(data);
    });
};
const updateCCI = (value) => {
  const cciRef = firebase.firestore().collection('puntosDeControl').doc(value);

  // Set the "puntosDeControl" field of the puntosDeControl 'value'
  return cciRef
    .update({
      capital: true,
    })
    .then(() => {
      console.log('Document successfully updated!');
    })
    .catch((error) => {
      // The document probably doesn't exist.
      console.error('Error updating document: ', error);
    });
};
export { sendCCI, getADocument, updateCCI, getAllDocuments, listenAllDocs };

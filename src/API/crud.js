import firebase from '../firebase.config';

const time = firebase.firestore.Timestamp.fromDate(new Date());
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

const createComment = (obj) =>
  firebase
    .firestore()
    .collection('comentarios')
    .doc()
    .set(obj)
    .then(() => {
      console.log('se envio el comentario');
    })
    .catch((error) => {
      console.log('Ocurrió un error al enviar tu comentario', error);
    });
const getComments = (callback) =>
  firebase
    .firestore()
    .collection('comentarios')
    // .where('id', '==', id)
    .orderBy('date', 'asc')
    .onSnapshot((querySnapshot) => {
      const comments = [];
      querySnapshot.forEach((doc) => {
        const objComment = {
          content: doc.data().content,
          id: doc.data().id,
          user: doc.data().user,
        };
        comments.push(objComment);
      });
      callback(comments);
    });

const getADocument = (docID, collectionName) => {
  const docRef = firebase.firestore().collection(collectionName).doc(docID);
  return docRef.get();
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
    .onSnapshot((doc) => {
      const dataArr = doc.docs.map((listTable) => ({
        id: listTable.id,
        ...listTable.data(),
      }));
      callback(dataArr);
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
export {
  sendCCI,
  createComment,
  getComments,
  getADocument,
  updateCCI,
  getAllDocuments,
  listenAllDocs,
  time,
};


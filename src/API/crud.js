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
export { sendCCI, getADocument, updateCCI, getAllDocuments, listenAllDocs };

// const rowData = [
//   {
//     title:
//       'La compañia no cuenta formalizado en actas la distribución de dividendos',
//     description:
//       'La compañia no cuenta formalizado en actas la distribución de dividendos',
//     fsli: 'Share capital and other equity accounts',
//     auditUnit: 'Empresa B1',
//     finalConclusionOnSeverity: 'Deficiency in Internal Control',
//     status: 'Pendiente',
//     recomendation: 'Ver recomendaciones',
//   },
//   {
//     title: 'Formalización del termino de contrato',
//     description:
//       'La compañia no ha formalizado la terminación del contrato en el cual indicaban que la renta ascendia a US$60,000.',
//     fsli: 'Revenue',
//     auditUnit: 'Empresa B1',
//     finalConclusionOnSeverity: 'Deficiency in Internal Control',
//     status: 'Rechazado',
//     recomendation: 'Ver recomendaciones',
//   },
//   {
//     title:
//       'La compañia no ha formalizado el reparto de dividendos por US$ 26 millones',
//     description:
//       'La compañia no ha formalizado el reparto de dividendos por US$ 26 millones',
//     fsli: 'Share capital and other equity accounts',
//     auditUnit: 'Empresa B2',
//     finalConclusionOnSeverity: 'Deficiency in Internal Control',
//     status: 'Aceptado',
//     recomendation: 'Ver recomendaciones',
//   },
//   {
//     title: 'Partidas conciliatorias mayores a 1 año',
//     description:
//       'Se identificó en la conciliación bancaria del Banco de la Nación que existen partidas conciliatorias mayor a 1 año correspondientes a depósitos no contabilizados',
//     fsli: 'Cash and cash equivalents',
//     auditUnit: 'Empresa B3',
//     finalConclusionOnSeverity: 'Deficiency in Internal Control',
//     status: 'Proceso',
//     recomendation: 'Ver recomendaciones',
//   },
//   {
//     title:
//       'Personal cesado cuenta con autorización para firma en las entidades bancarias',
//     description:
//       'Se identificó personas que fueron confirmadas por el banco que no se encontraban en el listado de firmantes de la compañía (Banco BBVA) al 31/12/2018',
//     fsli: 'Cash and cash equivalents',
//     auditUnit: 'Empresa B3',
//     finalConclusionOnSeverity: 'Deficiency in Internal Control',
//     status: 'Pendiente',
//     recomendation: 'Ver recomendaciones',
//   },
// ];

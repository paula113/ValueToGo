import firebase from '../firebase.config';

const dataFsli = [
  {
    name: 'Acounts payable',
    value: 1,
  },
  {
    name: 'Acounts receivable, Allowance for doubtful accounts',
    value: 1,
  },
  {
    name: 'Accruals, provisions and other liabilities',
    value: 1,
  },
  {
    name: 'Cash and cash equivalents',
    value: 2,
  },
  {
    name: 'Fraud risk',
    value: 1,
  },
  {
    name: 'Income taxes, Income tax expense',
    value: 1,
  },
  {
    name: 'Notes receivable',
    value: 1,
  },
  {
    name: 'Planning Activities',
    value: 3,
  },
  {
    name: 'Property, plat and equipment, Depreciation expense',
    value: 1,
  },
  {
    name: 'Salaries/payroll expense',
    value: 2,
  },
];

const dataPieChart = [
  { name: 'Proceso', value: 9 },
  { name: 'Aceptado', value: 26 },
  { name: 'Pendiente', value: 9 },
  { name: 'Rechazado', value: 8 },
];

const dataPieDeficiency = [{ name: 'Deficiency internal control ', value: 1000 }];
export { dataFsli, dataPieDeficiency, dataPieChart };

// useEffect(() => {
//   firebase
//     .firestore()
//     .collection('puntosDeControl')
//     .where('status', '==', 'Pendiente')
//     .get()
//     .then((resp) => console.log(resp.size));
// }, []);

// const getData = firebase.firestore().collection('puntosDeControl');

// const allStatus = Promise.all([
//   getData.where('status', '==', 'Pendiente').get(),
//   getData.where('status', '==', 'Proceso').get(),
//   getData.where('status', '==', 'Aceptado').get(),
//   getData.where('status', '==', 'Rechazado').get(),
// ]);
// allStatus
//   .then((values) => {
//     console.log('estoy en then,creo :(', values[0].size);
//   })
//   .catch((reason) => {
//     console.log(reason);
//   });

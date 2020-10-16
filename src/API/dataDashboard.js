import firebase from '../firebase.config';

const dataFsli = [
  {
    name: 'Acounts payable',
    Total: 1,
  },
  {
    name: 'Acounts receivable, Allowance for doubtful accounts',
    Total: 1,
  },
  {
    name: 'Accruals, provisions and other liabilities',
    Total: 1,
  },
  {
    name: 'Cash and cash equivalents',
    Total: 1,
  },
  {
    name: 'Fraud risk',
    Total: 1,
  },
  {
    name: 'Income taxes, Income tax expense',
    Total: 3,
  },
  {
    name: 'Notes receivable',
    Total: 1,
  },
  {
    name: 'Planning Activities',
    Total: 1,
  },
  {
    name: 'Property, plat and equipment, Depreciation expense',
    Total: 5,
  },
  {
    name: 'Salaries/payroll expense',
    Total: 10,
  },
];

const dataPieChart = [
  { name: 'Proceso', value: 9 },
  { name: 'Aceptado', value: 26 },
  { name: 'Pendiente', value: 9 },
  { name: 'Rechazado', value: 8 },
];

const dataPieDeficiency = [
  { name: 'Deficiency internal control ', value: 500 },
  { name: 'Suma Total ', value: 500 },
];
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

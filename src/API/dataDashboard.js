import firebase from '../firebase.config';

const dataFsli = [
  {
    name: 'Payable',
    Total: 1,
  },
  {
    name: 'Received',
    Total: 1,
  },
  {
    name: 'Accruals',
    Total: 1,
  },
  {
    name: 'Cash',
    Total: 1,
  },
  {
    name: 'Risk',
    Total: 1,
  },
  {
    name: 'Income',
    Total: 3,
  },
  {
    name: 'Notes',
    Total: 1,
  },
  {
    name: 'Expenses',
    Total: 5,
  },
  {
    name: 'Payroll',
    Total: 10,
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

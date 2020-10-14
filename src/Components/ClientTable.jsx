import React from 'react'; // { useState, useEffect }
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core/';
// import data from '../API/data';
// import {
//   sendCCI,
//   getADocument,
//   updateCCI,
//   getAllDocuments,
//   listenAllDocs,
// } from '../API/crud';
// import firebase from '../firebase.config';
import Badge from './Badge';
import './ClientTable.scss';

function ClientTable() {
  // const [rowData, setRowData] = useState([]);

  const rowData = [
    {
      title:
        'La compañia no cuenta formalizado en actas la distribución de dividendos',
      description:
        'La compañia no cuenta formalizado en actas la distribución de dividendos',
      fsli: 'Share capital and other equity accounts',
      auditUnit: 'Empresa B1',
      finalConclusionOnSeverity: 'Deficiency in Internal Control',
      status: 'Pendiente',
      recomendation: 'Ver recomendaciones',
    },
    {
      title: 'Formalización del termino de contrato',
      description:
        'La compañia no ha formalizado la terminación del contrato en el cual indicaban que la renta ascendia a US$60,000.',
      fsli: 'Revenue',
      auditUnit: 'Empresa B1',
      finalConclusionOnSeverity: 'Deficiency in Internal Control',
      status: 'Rechazado',
      recomendation: 'Ver recomendaciones',
    },
    {
      title:
        'La compañia no ha formalizado el reparto de dividendos por US$ 26 millones',
      description:
        'La compañia no ha formalizado el reparto de dividendos por US$ 26 millones',
      fsli: 'Share capital and other equity accounts',
      auditUnit: 'Empresa B2',
      finalConclusionOnSeverity: 'Deficiency in Internal Control',
      status: 'Aceptado',
      recomendation: 'Ver recomendaciones',
    },
    {
      title: 'Partidas conciliatorias mayores a 1 año',
      description:
        'Se identificó en la conciliación bancaria del Banco de la Nación que existen partidas conciliatorias mayor a 1 año correspondientes a depósitos no contabilizados',
      fsli: 'Cash and cash equivalents',
      auditUnit: 'Empresa B3',
      finalConclusionOnSeverity: 'Deficiency in Internal Control',
      status: 'Proceso',
      recomendation: 'Ver recomendaciones',
    },
    {
      title:
        'Personal cesado cuenta con autorización para firma en las entidades bancarias',
      description:
        'Se identificó personas que fueron confirmadas por el banco que no se encontraban en el listado de firmantes de la compañía (Banco BBVA) al 31/12/2018',
      fsli: 'Cash and cash equivalents',
      auditUnit: 'Empresa B3',
      finalConclusionOnSeverity: 'Deficiency in Internal Control',
      status: 'Pendiente',
      recomendation: 'Ver recomendaciones',
    },
  ];

  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection('puntosDeControl')
  //     .onSnapshot((doc) => {
  //       const dataArr = doc.docs.map((listTable) => ({
  //         id: listTable.id,
  //         ...listTable.data(),
  //       }));
  //       setRowData(dataArr);
  //     });
  // }, []);
  const headerColumn = [
    {
      id: '01',
      label: 'ESTADO',
    },
    {
      id: '02',
      label: 'TÍTULO',
    },
    {
      id: '03',
      label: 'DESCRIPCIÓN',
    },
    {
      id: '04',
      label: 'RUBRO',
    },
    {
      id: '05',
      label: 'EMPRESA',
    },
    {
      id: '06',
      label: 'IMPACTO',
    },
    {
      id: '07',
      label: 'RECOMENDACIONES',
    },
  ];

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headerColumn.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Badge name={row.status} className={row.status} />
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.fsli}</TableCell>
                <TableCell>{row.auditUnit}</TableCell>
                <TableCell>{row.finalConclusionOnSeverity}</TableCell>
                <TableCell>
                  <button type="button">{row.recomendation}</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ClientTable;

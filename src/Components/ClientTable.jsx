import React, { useState, useEffect } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { listenAllDocs } from '../API/crud';
import Badge from './Badge';
import './ClientTable.scss';

function ClientTable() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    listenAllDocs(setRowData);
  }, []);
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
                  <Link to={`/cliente/recomendaciones:${row.id}`}>
                    <button type="button" className="ver-mas">
                      ver más
                    </button>
                  </Link>
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

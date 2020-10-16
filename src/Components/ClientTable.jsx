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
import headerColumn from '../API/headerTable';

function RecoDetails() {
  const [empresa, setEmpresa] = useState('Todos');

  function handleSelect(e) {
    e.preventDefault();
    setEmpresa(e.currentTarget.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="detalles-de-recomendacion" onSubmit={handleSubmit}>
      <select value={empresa} onChange={handleSelect}>
        <option value="Todos">Todos</option>
        <option value="Empresa-B1">Empresa B1</option>
        <option value="Empresa-B2">Empresa B2</option>
        <option value="Empresa-B3">Empresa B3</option>
        <option value="Empresa-B4">Empresa B4</option>
        <option value="Empresa-B5">Empresa B5</option>
      </select>
    </form>
  );
}

function ClientTable() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    listenAllDocs(setRowData);
  }, []);

  return (
    <>
      <RecoDetails />
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
                  {/* <TableCell>{row.description}</TableCell> */}
                  <TableCell>{row.fsli}</TableCell>
                  <TableCell>{row.auditUnit}</TableCell>
                  <TableCell>{row.finalConclusionOnSeverity}</TableCell>
                  <TableCell>
                    <Link to={`/cliente/recomendaciones:${row.id}`}>
                      <button type="button" className="ver-mas">
                        Ver más
                      </button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

export default ClientTable;

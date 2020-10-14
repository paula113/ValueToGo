import React from 'react';
import data from '../API/data';
import ClientTable from '../Components/ClientTable';
import {
  sendCCI,
  getADocument,
  updateCCI,
  getAllDocuments,
  listenAllDocs,
} from '../API/crud';

function Client() {
  // sendCCI(data);
  return (
    <main>
      <h1>socio</h1>
      <ClientTable />
    </main>
  );
}

export default Client;

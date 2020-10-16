import React, { useState, useEffect } from 'react';
import './Client.scss';
import TabWrapper from '../Components/TabWrapper';
import { listenAllDocs } from '../API/crud';

function Client() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    listenAllDocs(setRowData);
  }, []);
  return (
    <main className="paddTop">
      <h1>Recomendaciones de Control</h1>
      <TabWrapper rowData={rowData} />
    </main>
  );
}

export default Client;

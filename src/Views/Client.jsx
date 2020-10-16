import React, { useState, useEffect } from 'react';
import './Client.scss';
import TabWrapper from '../Components/TabWrapper';
import { listenAllDocs } from '../API/crud';
import RecoDetails from '../Components/RecoDetails';

function Client() {
  const [rowData, setRowData] = useState([]);
  const [category, setCategory] = useState('Todos');
  const newRowData = rowData.filter((obj) => obj.auditUnit === category);
  console.log(rowData);

  useEffect(() => {
    listenAllDocs(setRowData);
  }, []);
  return (
    <main className="paddTop">
      <h1>Recomendaciones de Control</h1>
      <RecoDetails category={category} setCategory={setCategory} />
      <TabWrapper rowData={category === 'Todos' ? rowData : newRowData} />
    </main>
  );
}

export default Client;

import React, { useState } from 'react';
import readXlsxFile from 'read-excel-file';
// import schema from '../API/schema';

function Socio() {
  const [excelFile, setExcelFile] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    if (excelFile) {
      readXlsxFile(excelFile, { sheet: 'Sheet1' })
        .then((data) => {
          console.log(data); // LOGUEA LA DATA
          const arrayObject = data.map((item) => {
            return { ...item };
          });

          console.log(arrayObject);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      {/* <nav>Nav Bar</nav> */}
      <h1>PwC</h1>
      <form>
        <input
          accept=".xlsx"
          type="file"
          onChange={(e) => setExcelFile(e.target.files[0])}
        />
        <button type="button" onClick={handleClick}>
          {' '}
          Subir
        </button>
      </form>
      <p>TABLE</p>
    </>
  );
}

export default Socio;

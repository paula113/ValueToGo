import React, { useState } from 'react';
// import readXlsxFile from 'read-excel-file';
import schema from '../API/schema';

function Socio() {
  const [excelFile, setExcelFile] = useState();
  const [dataExel, setDataExel] = useState({
    Name: '',

  });
  const handleClick = (e) => {
    e.preventDefault();
    // if (excelFile) {
    //   readXlsxFile(excelFile, { sheet: 'Sheet1' }).then((data) => {
    //     console.log(data);// LOGUEA LA DATA
    //     // data.reduce((accumulator, currentValue) => {

    //     //   console.log(currentValue.filter((item) => item != null));
    //     // });
    //   })
    //     .catch((err) => console.log(err));
    // }
  };
  return (
    <>
      <nav>Nav Bar</nav>
      <h1>Socio == Senior</h1>
      <form>
        <input
          accept=".xlsx"
          type="file"
          onChange={(e) => setExcelFile(e.target.files[0])}
        />
        <button type="button" onClick={handleClick}> Subir</button>
      </form>
      <p>TABLE</p>
    </>
  );
}

export default Socio;

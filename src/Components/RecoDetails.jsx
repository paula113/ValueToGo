import React, { useState } from 'react';
import './RecoDetails.scss';

export default function RecoDetails(props) {
  // const [category, setCategory] = useState('');
  const { category, setCategory } = props;
  // const optionVal = rowData.map((obj) => obj.auditUnit);
  // const values = [...new Set(optionVal)];
  const mapOpt = [
    'Todos',
    'Empresa B1',
    'Empresa B2',
    'Empresa B3',
    'Empresa B4',
    'Empresa B5',
  ];

  // console.log(values);
  return (
    <div className="detalles-de-recomendacion">
      <select
        onChange={(e) => setCategory(e.target.value)}
        // onChange={(e) => {
        //   e.preventDefault();
        //   const val = e.currentTarget.value;
        //   const newArr = rowData.filter((obj) => obj.auditUnit === val);
        //   optionVal.push('todos');
        //   setRowData(newArr);
        //   // setRowData(newData);
        // }}
      >
        {/* "Empresa B2", "Empresa B4", "Empresa B5", "Empresa B3", "Empresa B1 */}
        {mapOpt.map((item) => (
          <option key={item} value={item === 'Todos' ? null : item}>
            {item}
          </option>
        ))}
        {/* 
        <option value="Empresa-B1">Empresa B1</option>
        <option value="Empresa-B2">Empresa B2</option>
        <option value="Empresa-B3">Empresa B3</option>
        <option value="Empresa-B4">Empresa B4</option>
        <option value="Empresa-B5">Empresa B5</option> */}
      </select>
    </div>
  );
}

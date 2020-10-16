import React, { useState } from 'react';
import './RecoDetails.scss';

export default function RecoDetails(props) {
  const { category, setCategory } = props;
  const mapOpt = [
    'Todos',
    'Empresa B1',
    'Empresa B2',
    'Empresa B3',
    'Empresa B4',
    'Empresa B5',
  ];
  return (
    <div className="select">
      <span>Empresa:</span>
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="select-option"
      >
        {mapOpt.map((item) => (
          <option key={item} value={item === 'Todos' ? null : item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

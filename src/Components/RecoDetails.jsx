import React from 'react';
import './RecoDetails.scss';

export default function RecoDetails(props) {
  const { setEmpresa, setStatus } = props;
  return (
    <div className="detalles-de-recomendacion">
      <select
        name="empresaB"
        id=""
        onChange={(e) => {
          e.preventDefault();
          setEmpresa(e.currentTarget.value);
        }}
      >
        {/* "Empresa B2", "Empresa B4", "Empresa B5", "Empresa B3", "Empresa B1 */}
        <option value="Empresa B1">Empresa B1</option>
        <option value="Empresa B2">Empresa B2</option>
        <option value="Empresa B3">Empresa B3</option>
        <option value="Empresa B4">Empresa B3</option>
        <option value="Empresa B5">Empresa B3</option>
      </select>
    </div>
  );
}

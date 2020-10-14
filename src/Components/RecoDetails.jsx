import React from 'react';
import './RecoDetails.scss';

export default function RecoDetails() {
  return (
    <div className="detalles-de-recomendacion">
      <h6>Detalles de recomendacion</h6>
      <select name="empresaB" id="">
        <option value="empresaB1">Empresa B1</option>
        <option value="empresaB2">Empresa B2</option>
        <option value="empresaB3">Empresa B3</option>
      </select>
      <select name="empresaB" id="">
        <option value="pendientes">Pendientes</option>
        <option value="proceso">Proceso</option>
        <option value="realizado">Realizado</option>
      </select>
    </div>
  );
}

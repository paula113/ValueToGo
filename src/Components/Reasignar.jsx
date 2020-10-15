/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Reasignar.scss';

export default function Reasignar() {
  return (
    <div className="container-assignment">
      <label htmlFor="assignment">
        Asigna la carta de Recomendación al encargado que corresponde
      </label>
      <form name="assignment">
        <h3>Area</h3>
        <p>Selecciona el area al que deseas asignar la recomendación.</p>
        <select className="select-assignment" name="Selecciona" id="">
          <option value="finanzas">Finanzas</option>
          <option value="comercial">Comercial</option>
          <option value="gerencia">Gerencia</option>
          <option value="logistica">Logística</option>
        </select>
        <h3>Nombre</h3>
        <input className="input-assignment" type="text" name="" id="" />
        <h3>Correo</h3>
        <input className="input-assignment" type="email" name="" id="" />
        <input
          className="submit-assignment"
          id="assignment"
          type="submit"
          value="Asignar"
        />
      </form>
    </div>
  );
}

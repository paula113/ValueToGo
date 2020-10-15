import React from 'react';
import './HeaderNav.scss';

export default function HeaderNav(props) {
  const { setView } = props;
  return (
    <ul className="headerNav">
      <li role="presentation" onClick={() => setView('Devolver')}>
        Devolver
      </li>
      <li role="presentation" onClick={() => setView('Reasignar')}>
        Reasignar
      </li>
      <li role="presentation" onClick={() => setView('Aceptar')}>
        Aceptar
      </li>
    </ul>
  );
}

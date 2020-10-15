/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import './Activity.scss';
import HeaderNav from './HeaderNav';
import Devolver from './Devolver';
import Aceptar from './Aceptar';
import Reasignar from './Reasignar';

export default function Activity() {
  const [view, setView] = useState('');
  return (
    <div className="Activity">
      <HeaderNav setView={setView} />
      {view === 'Devolver' ? (
        <Devolver />
      ) : view === 'Reasignar' ? (
        <Reasignar />
      ) : view === 'Aceptar' ? (
        <Aceptar />
      ) : (
        <Devolver />
      )}
      {/* <Comments /> */}
    </div>
  );
}

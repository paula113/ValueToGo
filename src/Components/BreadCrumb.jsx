import React from 'react';
import './BreadCrumb.scss';

export default function BreadCrumb() {
  return (
    <ul className="breadcrumb">
      <li>{'<'}</li>
      <li>Detalle de recomedaciones</li>
      <li>/</li>
      <li>Ver recomendación</li>
    </ul>
  );
}

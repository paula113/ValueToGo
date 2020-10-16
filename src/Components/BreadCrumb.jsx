import React from 'react';
import './BreadCrumb.scss';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';

export default function BreadCrumb() {
  const history = useHistory();
  return (
    <ul className="breadcrumb">
      <ArrowBackIosIcon className="iconBack" onClick={() => history.goBack()} />
      <li>Detalle de recomedaciones</li>
      <li>/</li>
      <li>Ver recomendación</li>
    </ul>
  );
}

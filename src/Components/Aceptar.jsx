import React from 'react';
import calendar from '../Assets/calendar.png';
import activity1 from '../Assets/activity1.png';
import activity2 from '../Assets/activity2.png';
import './Aceptar.scss';
import useModal from '../hooks/useModal';
import usePopup from '../hooks/usePopup';
import ModalActivity from './ModalActivity';
import ModalAccepted from './ModalAccepted';

export default function Aceptar() {
  const { isShowing, toggleModal } = useModal();
  const { isLooking, hiddenModal } = usePopup();
  return (
    <div>
      <div className="container-action-calendar">
        <div>
          <h5>Plan de acción y seguimiento</h5>
          <h6>Registra tu plan de acción</h6>
        </div>
        <button className="button-calendar" onClick={toggleModal} type="button">
          Añadir actividad
        </button>
      </div>
      <section className="container-calendar">
        <img
          className="calendar-image"
          src={calendar}
          alt="calendario de actividades"
        />
        <img className="calendar-image" src={activity1} alt="actividad uno" />
        <img className="calendar-image" src={activity2} alt="actividad dos" />
        <button className="accepted-button" type="button" onClick={hiddenModal}>
          Aceptar recomendación
        </button>
        <ModalAccepted hide={hiddenModal} isShowingg={isLooking} />
      </section>
      <ModalActivity hide={toggleModal} isShowing={isShowing} />
    </div>
  );
}

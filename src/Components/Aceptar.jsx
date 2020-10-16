import React from 'react';
import calendar from '../Assets/calendar.png';
import activity1 from '../Assets/activity1.png';
import activity2 from '../Assets/activity2.png';

export default function Aceptar() {
  return (
    <div>
      <div>
        <button type="button">Añadir actividad</button>
      </div>
      <section>
        <img src={calendar} alt="calendario de actividades" />
        <img src={activity1} alt="actividad uno" />
        <img src={activity2} alt="actividad dos" />
      </section>
    </div>
  );
}

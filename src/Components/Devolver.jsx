import React from 'react';
import './Devolver.scss';
import HistoryComments from './HistoryComments';

export default function Devolver() {
  return (
    <div>
      <h2>Devolver</h2>
      <section className="devolver-chat">
        <HistoryComments
          arr={[
            {
              cciID: '0gI0WGx6lXfyWDWcXb0L',
              content:
                'Recomendamos se establezca un procedimiento para informar a las entidades financieras cuando un representante legal ya no labora para la Compañía, esto con el fin de derogar los poderes que le fueron otorgados.  Asimismo, realizar las gestiones necesarias con dichas entidades para actualizar la relación de firmas autorizadas con el fin de mitigar cualquier riesgo de malversación de fondos.',
              uid: 'nbshjb,HJDCV,JHADW',
            },
          ]}
        />
      </section>
    </div>
  );
}

import React from 'react';
import ReactDOM from 'react-dom';
import './ModalAccepted.scss';

const BuyModal = ({ isShowingg, hide }) =>
  isShowingg
    ? ReactDOM.createPortal(
        <div>
          <div className="modal-overlay" />
          <div className="little-modal-wrapper">
            <div className="little-modal">
              <span className="little-span">¡Gracias!</span>
              <span className="little-span">Tu recomendación fue aceptada.</span>
              <button className="button-modal-complete" type="button" onClick={hide}>
                Aceptar
              </button>
            </div>
          </div>
        </div>,
        document.getElementById('modal-root'),
      )
    : null;

export default BuyModal;

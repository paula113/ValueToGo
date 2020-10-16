import React from 'react';
import ReactDOM from 'react-dom';
import './ModalActivity.scss';
import close from '../Assets/close.svg';

const ModalActivity = ({ isShowing, hide }) => {
  return isShowing
    ? ReactDOM.createPortal(
        <div>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <div className="header-modal-title flex">
                  <span className="modal-title">Nueva actividad</span>
                </div>
                <div className="modal-close">
                  <button
                    type="button"
                    className="modal-close-button"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={hide}
                  >
                    <img src={close} alt="cerrar modal" />
                  </button>
                </div>
              </div>
              <div className="modal-content">
                <label htmlFor="">Responsable</label>
                <input type="text" placeholder="Nombre y Apellido" />
                <label htmlFor="">Describe una actividad</label>
                <textarea
                  className="modal-content-description"
                  rows="8"
                  cols="70"
                  type="text"
                  placeholder="Escribe aquí"
                />
              </div>
              <div className="button-container">
                <button className="button-action-modal" onClick={hide} type="button">
                  Cancelar
                </button>
                <button className="button-action-modal" onClick={hide} type="button">
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.getElementById('modal-root'),
      )
    : null;
};

export default ModalActivity;

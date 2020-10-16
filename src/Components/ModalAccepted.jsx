import React from 'react';
import ReactDOM from 'react-dom';

const BuyModal = ({ isShowingg, hiden }) =>
  isShowingg
    ? ReactDOM.createPortal(
        <div>
          <div className="modal-overlay" />
          <div className="buy-modal-wrapper">
            <div className="buy-modal flex column">
              <span className="buy-span">¡Gracias!</span>
              <span className="buy-span-x">Tu recomendación fue aceptada.</span>
              <button
                className="button-modal-complete"
                type="button"
                onClick={hiden}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>,
        document.getElementById('modal-root'),
      )
    : null;

export default BuyModal;

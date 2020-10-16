import React from 'react';
import './Details.scss';
import { validateStrings } from '../Helpers/helpers';
// import PropTypes from 'prop-types';

export default function Details(props) {
  const { obj } = props;

  return (
    <div className="details-info">
      <section className="details-info-container">
        {Object.entries(obj).map(([keys, value]) => (
          <div key={keys} className="details-info-obj">
            <h5>
              {validateStrings(keys) === 'Fsli'
                ? validateStrings('Rubro')
                : validateStrings(keys)}
            </h5>
            <p>{value}</p>
          </div>
        ))}
      </section>

      {/* <section> */}
      {/* <h6>Sustento</h6>
        <button type="submit" onClick={() => console.log('descarga file')}>
          Descargar Sustento
        </button> */}
      {/* </section> */}
    </div>
  );
}
// Details.propTypes = {
//   obj: PropTypes.object,
// };

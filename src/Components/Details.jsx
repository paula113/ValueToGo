import React from 'react';
import './Details.scss';
import { validateStrings } from '../Helpers/helpers';
// import PropTypes from 'prop-types';

export default function Details(props) {
  const { obj } = props;

  return (
    <div className="details-info">
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
    </div>
  );
}
// Details.propTypes = {
//   obj: PropTypes.object,
// };

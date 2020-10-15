import React from 'react';
import PropTypes from 'prop-types';
import './HistoryComments.scss';
import { validateStrings } from '../Helpers/helpers';

export default function HistoryComments(props) {
  const { obj } = props;
  const styleColor = localStorage.getItem('user');
  return (
    <>
      <div
        key={obj.content}
        className={`details-info-obj ${
          styleColor === obj.user ? 'white' : 'yellow'
        }`}
      >
        {obj.id === 'id' ? null : (
          <>
            <h5>{obj.user}</h5>
            <p>{obj.content}</p>
          </>
        )}
      </div>
    </>
  );
}

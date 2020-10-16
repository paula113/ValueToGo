import React from 'react';
import './HistoryComments.scss';

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

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
        {obj.content || obj.image ? (
          <>
            <h5>{obj.user}</h5>
            {obj.content ? <p>{obj.content}</p> : null}
            {obj.image ? <img src={obj.image} alt={obj.image} /> : null}
          </>
        ) : (
          <h5>{obj.user}</h5>
        )}
      </div>
    </>
  );
}

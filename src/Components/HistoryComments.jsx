import React from 'react';
import './HistoryComments.scss';
import { validateStrings } from '../Helpers/helpers';

export default function HistoryComments(props) {
  const { commentBox } = props;
  return (
    <div className="devolver-comments">
      {commentBox.map((obj) =>
        Object.entries(obj).map(([keys, value]) => (
          <div key={keys} className="details-info-obj">
            {keys === 'cciID' || keys === 'uid' ? null : (
              <>
                <h5>{validateStrings(keys)}</h5>
                <p>{value}</p>
              </>
            )}
          </div>
        )),
      )}
    </div>
  );
}

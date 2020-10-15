import React from 'react';
import PropTypes from 'prop-types';
import './HistoryComments.scss';
import { validateStrings } from '../Helpers/helpers';

export default function HistoryComments(props) {
  const { commentBox } = props;
  HistoryComments.propTypes = {
    commentBox: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
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

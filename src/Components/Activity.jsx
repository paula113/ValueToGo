/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import './Activity.scss';
import PropTypes from 'prop-types';
import HeaderNav from './HeaderNav';
import Devolver from './Devolver';
import Aceptar from './Aceptar';
import Reasignar from './Reasignar';
import firebase from '../firebase.config';
import { getComments } from '../API/crud';

export default function Activity({ ccID }) {
  const [view, setView] = useState('');
  const initialComment = {
    id: ccID,
    content: '',
    user: localStorage.getItem('user'),
    date: firebase.firestore.Timestamp.fromDate(new Date()),
  };
  Activity.propTypes = {
    ccID: PropTypes.string.isRequired,
  };
  const [comment, setComment] = useState(initialComment);
  const [commentBox, setCommentBox] = useState([]);

  useEffect(() => {
    getComments(setCommentBox, ccID);
  }, []);

  return (
    <div className="Activity">
      <div className="details-info-title">Acciones de la Gerencia</div>
      <HeaderNav setView={setView} />
      {view === 'Devolver' ? (
        <Devolver
          initialComment={initialComment}
          comment={comment}
          setComment={setComment}
          commentBox={commentBox}
          setCommentBox={setCommentBox}
          ccID={ccID}
        />
      ) : view === 'Reasignar' ? (
        <Reasignar />
      ) : view === 'Aceptar' ? (
        <Aceptar />
      ) : (
        <Devolver
          initialComment={initialComment}
          comment={comment}
          setComment={setComment}
          commentBox={commentBox}
          setCommentBox={setCommentBox}
          ccID={ccID}
        />
      )}
    </div>
  );
}

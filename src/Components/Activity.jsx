/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import './Activity.scss';
import HeaderNav from './HeaderNav';
import Devolver from './Devolver';
import Aceptar from './Aceptar';
import Reasignar from './Reasignar';
import { getComments } from '../API/crud';

export default function Activity({ ccID }) {
  const [view, setView] = useState('');
  const initialComment = {
    id: ccID,
    content: '',
    user: localStorage.getItem('user'),
  };

  const [comment, setComment] = useState(initialComment);
  const [commentBox, setCommentBox] = useState([]);
  useEffect(() => getComments(setCommentBox, ccID), []);
  // console.log(commentBox);
  return (
    <div className="Activity">
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
        />
      )}
    </div>
  );
}

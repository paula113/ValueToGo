/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import './Activity.scss';
import HeaderNav from './HeaderNav';
import Devolver from './Devolver';
import Aceptar from './Aceptar';
import Reasignar from './Reasignar';

export default function Activity({
  initialComment,
  comment,
  setComment,
  commentBox,
  setCommentBox,
}) {
  const [view, setView] = useState('');
  console.log(commentBox);
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
        />
      ) : view === 'Reasignar' ? (
        <Reasignar />
      ) : view === 'Aceptar' ? (
        <Aceptar />
      ) : (
        <Devolver />
      )}
      {/* <Comments /> */}
    </div>
  );
}

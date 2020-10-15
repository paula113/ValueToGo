import React from 'react';
import './Devolver.scss';
import HistoryComments from './HistoryComments';
import { createComment } from '../API/crud';

export default function Devolver({
  initialComment,
  comment,
  setComment,
  commentBox,
  setCommentBox,
}) {
  console.log(commentBox);
  const catchComment = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };
  const sendComment = (obj) => {
    createComment(obj);
    setComment({ ...initialComment });
  };
  return (
    <div>
      {/* <h2>Devolver</h2> */}
      <section className="devolver-chat">
        <HistoryComments commentBox={commentBox} />
        <textarea
          id=""
          cols="30"
          placeholder="Escribe un comentario"
          name="content"
          onChange={catchComment}
        />
        <button type="button" onClick={() => sendComment(comment)}>
          Enviar
        </button>
      </section>
    </div>
  );
}

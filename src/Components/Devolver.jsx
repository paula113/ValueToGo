import React from 'react';
import PropTypes from 'prop-types';
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
  Devolver.propTypes = {
    commentBox: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
  Devolver.propTypes = {
    setComment: PropTypes.func.isRequired,
  };
  Devolver.propTypes = {
    setCommentBox: PropTypes.func.isRequired,
  };
  Devolver.propTypes = {
    comment: PropTypes.object.isRequired,
  };
  Devolver.propTypes = {
    initialComment: PropTypes.object.isRequired,
  };

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

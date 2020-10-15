import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './Devolver.scss';
import HistoryComments from './HistoryComments';
import { createComment } from '../API/crud';
import { uploadImagePost } from '../API/storage';

export default function Devolver(props) {
  const { initialComment, comment, setComment, commentBox, setCommentBox } = props;
  const currentUserUid = localStorage.getItem('user');
  const [fileInput, setFileInput] = useState('');
  const catchComment = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };
  const sendComment = (obj) => {
    createComment(obj);
    setComment({ ...initialComment });
  };
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      setFileInput(file);
    }
  };

  // console.log(commentBox);
  return (
    <>
      {/* <h2>Devolver</h2> */}
      <section className="devolver-chat">
        <div className="HistoryComments-box">
          {commentBox.map((obj) => (
            <HistoryComments Key={obj.user} obj={obj} />
          ))}
        </div>

        {/* <HistoryComments commentBox={commentBox} /> */}
        <section className="devolver-chat-send">
          <textarea
            id=""
            cols="30"
            placeholder="Escribe un comentario"
            name="content"
            onChange={catchComment}
          />
          <>
            <input type="file" onChange={handleImageUpload} />
            {/* <input type="file" onChange={(e) => setFile(() => e.target)} /> */}
            <button
              type="button"
              onClick={() => {
                uploadImagePost(fileInput, currentUserUid);
              }}
            >
              Subir
            </button>
          </>
          <button type="button" onClick={() => sendComment(comment)}>
            Enviar
          </button>
        </section>
      </section>
    </>
  );
}

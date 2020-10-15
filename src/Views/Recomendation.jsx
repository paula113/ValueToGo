import React, { useState, useEffect } from 'react';
import Details from '../Components/Details';
import Activity from '../Components/Activity';
import Breadcrumb from '../Components/BreadCrumb';
import { getComments } from '../API/crud';
// import DetailRecomendation from '../Components/DetailRecomendation';
import './Recomendation.scss';

export default function Recomendation() {
  console.log(
    'esta es la vista de recomendacion, incluir los componentes aquí, por favor. grcias <3',
  );
  const initialComment = {
    content: '',
  };
  const [comment, setComment] = useState(initialComment);
  const [commentBox, setCommentBox] = useState([]);
  useEffect(() => getComments(setCommentBox), []);
  console.log(commentBox);
  return (
    <div className="detalle-recomedaciones">
      <Breadcrumb />
      <p>Lee la Carta de Recomendación y responde con las siguientes acciones</p>
      <section className="detalle-features">
        <Details />
        <Activity
          initialComment={initialComment}
          comment={comment}
          setComment={setComment}
          commentBox={commentBox}
          setCommentBox={setCommentBox}
        />
      </section>
    </div>
  );
}

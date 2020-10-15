import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../Components/Details';
import Activity from '../Components/Activity';
import Breadcrumb from '../Components/BreadCrumb';
import { getComments, getADocument } from '../API/crud';
import './Recomendation.scss';

export default function Recomendation() {
  const initialComment = {
    content: '',
  };
  const [comment, setComment] = useState(initialComment);
  const [commentBox, setCommentBox] = useState([]);
  useEffect(() => getComments(setCommentBox), []);
  console.log(commentBox);
  const { id } = useParams();
  const [cci, setCci] = useState({});

  useEffect(() => {
    console.log(
      'esta es la vista de recomendacion, incluir los componentes aquí, por favor. grcias <3',
    );
    const cciID = id.split('').slice(1).join('');
    console.log(cciID);
    getADocument(cciID, 'puntosDeControl')
      .then((doc) => {
        if (doc.exists) {
          setCci(() => doc.data());
          console.log('Document data:', doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
  }, []);

  return (
    <div className="detalle-recomedaciones">
      <Breadcrumb />
      <p>Lee la Carta de Recomendación y responde con las siguientes acciones</p>
      <section className="detalle-features">
        <Details obj={cci} />
        <Activity
          initialComment={initialComment}
          comment={comment}
          setComment={setComment}
          commentBox={commentBox}
          setCommentBox={setCommentBox}
          ccID={id}
        />
      </section>
    </div>
  );
}

import React from 'react';
import loader from '../Assets/Loader.svg';
import './Loader.scss';

function Loader() {
  return (
    <div className="loader">
      <img src={loader} alt="gif loader" className="loader-image" />
    </div>
  );
}

export default Loader;

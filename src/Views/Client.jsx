import React from 'react';
import './Client.scss';
import TabWrapper from '../Components/TabWrapper';
// import RecoDetails from '../Components/RecoDetails';

function Client() {
  return (
    <main className="paddTop">
      <h1>Recomendaciones de Control</h1>
      {/* <RecoDetails /> */}
      <TabWrapper />
    </main>
  );
}

export default Client;

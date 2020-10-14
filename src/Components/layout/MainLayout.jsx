/* eslint-disable react/prop-types */
import React from 'react';
import './MainLayout.scss';
import TopBar from '../TopBar';

function MainLayout({ children }) {
  return (
    <>
      <TopBar />
      <div>topBar</div>
      <div>{children}</div>
      {/* <MobileBar /> */}
    </>
  );
}

export default MainLayout;

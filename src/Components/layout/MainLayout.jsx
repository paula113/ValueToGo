/* eslint-disable react/prop-types */
import React from 'react';
import './MainLayout.scss';
import { Container } from '@material-ui/core';
import TopBar from '../TopBar';

function MainLayout({ children }) {
  return (
    <main className="main-page">
      <TopBar />
      <Container>{children}</Container>
      {/* <MobileBar /> */}
    </main>
  );
}

export default MainLayout;

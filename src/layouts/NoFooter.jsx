import Header from '../components/header';
import { Outlet } from 'react-router-dom';
import React from 'react';

const NoFooter = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default NoFooter;
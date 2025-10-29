import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';
import React from 'react';

const WithFooter = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default WithFooter;
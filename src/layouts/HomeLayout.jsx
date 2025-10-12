import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => (
  <div className="body">
    <div className="content">
      <Header />
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default HomeLayout;
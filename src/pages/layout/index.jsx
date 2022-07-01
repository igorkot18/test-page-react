import React from 'react';

import { Outlet } from "react-router-dom";

import Header from '../../templates/header';
import Footer from '../../templates/footer';

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  );
}

export default Layout;
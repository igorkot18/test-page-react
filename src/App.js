import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './pages/layout';
import NotFoundComponent from './templates/notFoundPage';
import Main from './templates/main'

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='*' element={<NotFoundComponent />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import React from 'react';

import './styles.scss';

const NotFoundComponent = () => {
  return (
    <div className='not-found'>
      <div className='not-found__item'>
        <h1>Page not found</h1>
        <h2>404</h2>
      </div>
    </div>    
  );
}

export default NotFoundComponent;
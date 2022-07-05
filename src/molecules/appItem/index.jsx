import React from 'react';

import { APPLICATIONS_ITEM_DATA } from './constants';

import "./styles.scss";

const ApplicationsItem = () => {
  return (
    <div className='application container'>
      <div className='row g-4'>
        {APPLICATIONS_ITEM_DATA.map(({id, image, label}) => (
            <div className='col-xxl-3 p-0 col-lg-6' key={id}>
              <div className='application__item'>
                  <img className='application__item-image' src={image} alt='logo'></img>
                  <div className='application__item-label'>{label}</div> 
              </div>
            </div>
        ))}
      </div> 
    </div>
  )
}

export default ApplicationsItem;
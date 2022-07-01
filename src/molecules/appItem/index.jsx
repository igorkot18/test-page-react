import React from 'react';

import { APPLICATIONS_ITEM_DATA } from './constants';

import "./styles.scss";

const ApplicationsItem = () => {
  return (
    <div className='application'>
        {APPLICATIONS_ITEM_DATA.map(({id, image, label}) => (
            <div className='application__item' key={id}>
                <img src={image} alt='logo'></img>
                <div className='application__item-label'>{label}</div> 
            </div>
        ))}
    </div>
  )
}

export default ApplicationsItem;
import React from 'react';

import ImageComponent from '../../atoms/image';
import DescriptionComponent from '../../molecules/descriptionComponent';
import TitleComponent from '../../atoms/title';

import { FRAMEWORKS_DATA, TITLE } from './constants';

import "./styles.scss";

const FrameworkDescription = () => {
    return (
      <section id='frameworks' className='framework'>
        <TitleComponent title={TITLE} />
        <div className='container'>
        {FRAMEWORKS_DATA.map(({
          id,
          isLeftLocation, 
          logo, 
          title, 
          description, 
          buttonsLabels
        }) => (
        isLeftLocation ? 
          <div className='framework__item row' key={id}>
            <div className='col-xxl-6 p-0'>
              <ImageComponent source={logo} />
            </div>
            <div className='col-xxl-6 p-0'>
              <DescriptionComponent
                title={title}
                description={description}
                buttonsLabels={buttonsLabels}
              />
            </div>
          </div> :
          <div className='framework__item row' key={id}>
            <div className='col-xxl-6 p-0'>
              <DescriptionComponent
                title={title}
                description={description}
                buttonsLabels={buttonsLabels}
              />
            </div>
            <div className='col-xxl-6 p-0'>
              <ImageComponent source={logo} />
            </div>
          </div>
        ))}
        </div>
      </section>
    );
}

export default FrameworkDescription;
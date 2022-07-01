import React from 'react';

import ImageComponent from '../../atoms/image';
import DescriptionComponent from '../../molecules/descriptionComponent';
import TitleComponent from '../../atoms/title';

import { FRAMEWORKS_DATA, TITLE } from './constants';

import "./styles.scss";

const FrameworkDescription = () => {
    return (
      <div className='framework'>
        <TitleComponent title={TITLE} />
        {FRAMEWORKS_DATA.map(({
          id,
          isLeftLocation, 
          logo, 
          title, 
          description, 
          buttonsLabels
        }) => (
        isLeftLocation ? 
          <div className='framework__item' key={id}>
            <ImageComponent source={logo} />
            <div className='framework__item-description'>
              <DescriptionComponent
                title={title}
                description={description}
                buttonsLabels={buttonsLabels}
              />
            </div>
          </div> :
          <div className='framework__item' key={id}>
            <DescriptionComponent
              title={title}
              description={description}
              buttonsLabels={buttonsLabels}
            />
            <ImageComponent source={logo} />
          </div>
        ))}
      </div>
    );
}

export default FrameworkDescription;
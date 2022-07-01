import React from 'react';

import DescriptionComponent from '../../molecules/descriptionComponent';
import VideoComponent from '../../molecules/videoComponent';

import { VIDEO_URL, TITLE, DESCRIPTION, BUTTONS_LABELS } from './constants';

import "./styles.scss"

const InformationComponent = () => {
  return (
    <div className='information'>
      <div className='information__content'>
        <DescriptionComponent
          title={TITLE}
          description={DESCRIPTION}
          buttonsLabels={BUTTONS_LABELS}
        />
        <VideoComponent url={VIDEO_URL}/>
      </div>
    </div>
  );
}

export default InformationComponent;
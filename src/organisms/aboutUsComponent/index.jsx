import React from 'react';

import DescriptionComponent from '../../molecules/descriptionComponent';
import VideoComponent from '../../molecules/videoComponent';

import { VIDEO_URL, TITLE, DESCRIPTION, BUTTONS_LABELS } from './constants';

import "./styles.scss"

const AboutUsComponent = () => {
  return (
    <section id='aboutUs' className='contuct-us-component'>
      <div className='contuct-us-component__content container'>
        <div className='row'>
          <div className='col-xxl-6 col-md-6 col-sm-12'>
            <DescriptionComponent
            title={TITLE}
            description={DESCRIPTION}
            buttonsLabels={BUTTONS_LABELS}
          />
          </div>
          <div className='col-xxl-6 col-md-6 col-sm-12'>
            <VideoComponent url={VIDEO_URL}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsComponent;
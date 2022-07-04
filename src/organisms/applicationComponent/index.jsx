import React from 'react';

import TitleComponent from '../../atoms/title';
import ApplicationsItem from '../../molecules/appItem';

const ApplicationsComponent = () => {
  return (
    <section id='applications'>
        <TitleComponent title={"Applications"}/>
        <ApplicationsItem />
    </section>
    
  )
}

export default ApplicationsComponent;
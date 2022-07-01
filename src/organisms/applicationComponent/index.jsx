import React from 'react';

import TitleComponent from '../../atoms/title';
import ApplicationsItem from '../../molecules/appItem';

const ApplicationsComponent = () => {
  return (
    <>
        <TitleComponent title={"Applications"}/>
        <ApplicationsItem />
    </>
    
  )
}

export default ApplicationsComponent;
import React from 'react';

import WelcomePage from '../../organisms/welcomeComponent';
import FrameworkDescription from '../../organisms/frameworkDescription';
import InformationComponent from '../../organisms/information';
import FeedbackComponent from '../../organisms/feedbackComponent';
import ApplicationsComponent from '../../organisms/applicationComponent';
import LoginForm from '../../organisms/loginForm';

const Main = () => {
  return (
    <section>
      <WelcomePage />
      <InformationComponent />
      <FrameworkDescription />
      <FeedbackComponent />
      <ApplicationsComponent />
      <LoginForm />
    </section>
  );
}

export default Main;
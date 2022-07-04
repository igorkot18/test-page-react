import React from 'react';

import WelcomePage from '../../organisms/welcomeComponent';
import FrameworkDescription from '../../organisms/frameworkDescription';
import AboutUsComponent from '../../organisms/aboutUsComponent';
import FeedbackComponent from '../../organisms/feedbackComponent';
import ApplicationsComponent from '../../organisms/applicationComponent';
import LoginForm from '../../organisms/loginForm';

const Main = () => {
  return (
    <main>
      <WelcomePage />
      <AboutUsComponent />
      <FrameworkDescription />
      <FeedbackComponent />
      <ApplicationsComponent />
      <LoginForm />
    </main>
  );
}

export default Main;
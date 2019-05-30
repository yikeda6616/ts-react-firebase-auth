import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import Admin from '../Admin';
import Account from '../Account';
import Home from '../Home';
import Landing from '../Landing';
import Navigation from '../Navigation';
import PasswordChange from '../PasswordChange';
import PasswordForget from '../PasswordForget';
import Session from '../Session';
import SignIn from '../SignIn';
import SignOut from '../SignOut';
import SignUp from '../SignUp';
import { FirebaseContext } from '../Firebase';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={Landing} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.ACCOUNT} component={Account} />
        <Route path={ROUTES.ADMIN} component={Admin} />
      </Router>

      <SomeComponent />
      <PasswordChange />
      <Session />
      <SignOut />
    </div>
  );
};

const SomeComponent = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      return <div>I've access to Firebase and render something</div>;
    }}
  </FirebaseContext.Consumer>
);

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdminPage from '../Admin';
import AccountPage from '../Account';
import HomePage from '../Home';
import LandingPage from '../Landing';
import Navigation from '../Navigation';
import PasswordChange from '../PasswordChange';
import PasswordForgetPage from '../PasswordForget';
import { AuthUserContext, useAuthentication } from '../Session';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const App: React.FC = (props: any) => {
  const authUser = useAuthentication(props.firebase.auth);

  return (
    <AuthUserContext.Provider value={authUser}>
      <Router>
        <Navigation />
        <hr />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </Router>
      {/* <PasswordChange /> */}
    </AuthUserContext.Provider>
  );
};

export default withFirebase(App);

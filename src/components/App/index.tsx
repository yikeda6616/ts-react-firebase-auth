import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdminPage from '../Admin';
import AccountPage from '../Account';
import HomePage from '../Home';
import LandingPage from '../Landing';
import Navigation from '../Navigation';
import PasswordChange from '../PasswordChange';
import PasswordForgetPage from '../PasswordForget';
import Session from '../Session';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import { FirebaseContext } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const App = (props: any) => (
  <FirebaseContext.Consumer>
    {firebase => <AppBase {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

const AppBase: React.FC = (props: any) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    props.firebase.auth.onAuthStateChanged((authUser: any) => {
      console.log('onAuthStateChanged');
      authUser
        ? setAuthUser({ authUser } as any)
        : setAuthUser({ authUser: null } as any);
    });
    return () => {};
  }, []);

  return (
    <Router {...props}>
      <Navigation authUser={authUser} />
      <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </Router>
    // <PasswordChange />
    // <Session />
  );
};

export default App;

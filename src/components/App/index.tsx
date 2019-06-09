import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AdminPage from '../Admin';
import AccountPage from '../Account';
import HomePage from '../Home';
import LandingPage from '../Landing';
import Navigation from '../Navigation';
import PasswordChange from '../PasswordChange';
import PasswordForgetPage from '../PasswordForget';
import { AuthUserContext } from '../Session';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const App: React.FC = (props: any) => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listener = props.firebase.auth.onAuthStateChanged((authUser: any) => {
      authUser ? setAuthUser({ authUser } as any) : setAuthUser(null);
    });
    return () => {
      listener();
    };
    // Pass an empty array as a second argument.
    // This tells React that the effect doesn't depend on any values from props or state, so it never needs to re-run.
    // This way, the props and state inside the effect will always have their initial values.
    // See more detail at https://reactjs.org/docs/hooks-effect.html
  }, []);

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

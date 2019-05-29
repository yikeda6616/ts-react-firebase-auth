import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Admin from '../Admin';
import Account from '../Account';
import Firebase from '../Firebase';
import Home from '../Home';
import Landing from '../Landing';
import Navigation from '../Navigation';
import PasswordChange from '../PasswordChange';
import PasswordForget from '../PasswordForget';
import Session from '../Session';
import SignIn from '../SignIn';
import SignOut from '../SignOut';
import SignUp from '../SignUp';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Navigation />
      </Router>

      <Account />
      <Admin />
      <Firebase />
      <Home />
      <Landing />
      <PasswordChange />
      <PasswordForget />
      <Session />
      <SignIn />
      <SignOut />
      <SignUp />
    </div>
  );
};

export default App;

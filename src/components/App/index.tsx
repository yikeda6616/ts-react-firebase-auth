import React from 'react';
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
      <h1>App</h1>
      <Account />
      <Admin />
      <Firebase />
      <Home />
      <Landing />
      <Navigation />
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

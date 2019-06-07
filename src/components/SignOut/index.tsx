import React from 'react';
import { FirebaseContext } from '../Firebase';

const SignOutButton = () => (
  <FirebaseContext.Consumer>
    {(firebase: any) => (
      <button type='button' onClick={firebase.doSignOut}>
        Sign Out
      </button>
    )}
  </FirebaseContext.Consumer>
);

export default SignOutButton;

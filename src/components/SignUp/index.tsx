import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const SignUpPage: React.FC = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

export const SignUpForm = () => {
  const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
  };

  const [userInput, setUserInput] = useState(INITIAL_STATE);

  const onSubmit = (event: any) => {};

  const onChange = (event: any) => {
    setUserInput({ [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={() => onSubmit}>
      <input
        type='text'
        name='username'
        value={userInput.username}
        onChange={() => onChange}
        placeholder='Full Name'
      />
      <input
        type='text'
        value={userInput.email}
        onChange={() => onChange}
        placeholder='Email Address'
      />
      <input
        type='password'
        name='passwordOne'
        value={userInput.passwordOne}
        onChange={() => onChange}
        placeholder='Password'
      />
      <input
        type='password'
        name='passwordTwo'
        value={userInput.passwordTwo}
        onChange={() => onChange}
        placeholder='Confirm Password'
      />
      <button type='submit'>Sign Up</button>
      <p>{userInput.error}</p>
    </form>
  );
};

export const SignUpLink: React.FC = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

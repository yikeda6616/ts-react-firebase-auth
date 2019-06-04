import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const SignUpPage: React.FC = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

export const SignUpForm = () => {
  const [userInput, setUserInput] = useState(INITIAL_STATE);

  const onSubmit = (e: any) => {
    console.log(username, email, passwordOne, passwordTwo, error);
  };

  const onUserInputChange = (e: any) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const { username, email, passwordOne, passwordTwo, error } = userInput;

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='username'
        value={username}
        onChange={onUserInputChange}
        placeholder='Full Name'
      />
      <input
        type='text'
        name='email'
        value={email}
        onChange={onUserInputChange}
        placeholder='Email Address'
      />
      <input
        type='password'
        name='passwordOne'
        value={passwordOne}
        onChange={onUserInputChange}
        placeholder='Password'
      />
      <input
        type='password'
        name='passwordTwo'
        value={passwordTwo}
        onChange={onUserInputChange}
        placeholder='Confirm Password'
      />
      <p onClick={onSubmit}>test</p>
      <button disabled={isInvalid} type='submit' onSubmit={onSubmit}>
        Sign Up
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export const SignUpLink: React.FC = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

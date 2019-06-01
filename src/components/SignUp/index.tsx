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
  passwordTwo: ''
};

export const SignUpForm = () => {
  const [userInput, setUserInput] = useState(INITIAL_STATE);

  const onSubmit = (e: any) => {
    console.log(userInput);
  };

  const onUserInputChange = (e: any) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value } as any);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='username'
        value={userInput.username}
        onChange={onUserInputChange}
        placeholder='Full Name'
      />
      <input
        type='text'
        name='email'
        value={userInput.email}
        onChange={onUserInputChange}
        placeholder='Email Address'
      />
      <input
        type='password'
        name='passwordOne'
        value={userInput.passwordOne}
        onChange={onUserInputChange}
        placeholder='Password'
      />
      <input
        type='password'
        name='passwordTwo'
        value={userInput.passwordTwo}
        onChange={onUserInputChange}
        placeholder='Confirm Password'
      />
      <p onClick={onSubmit}>test</p>
      <button type='submit' onSubmit={onSubmit}>
        Sign Up
      </button>
    </form>
  );
};

export const SignUpLink: React.FC = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

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
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [passwordOne, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');

  const onSubmit = (event: any) => {};

  const onUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };
  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const onPasswordOneChange = (e: any) => {
    setPasswordOne(e.target.value);
  };
  const onPasswordTwoChange = (e: any) => {
    setPasswordTwo(e.target.value);
  };

  return (
    <form onSubmit={() => onSubmit}>
      <input
        type='text'
        name='username'
        value={username}
        onChange={onUsernameChange}
        placeholder='Full Name'
      />
      <input
        type='text'
        value={email}
        onChange={onEmailChange}
        placeholder='Email Address'
      />
      <input
        type='password'
        name='passwordOne'
        value={passwordOne}
        onChange={onPasswordOneChange}
        placeholder='Password'
      />
      <input
        type='password'
        name='passwordTwo'
        value={passwordTwo}
        onChange={onPasswordTwoChange}
        placeholder='Confirm Password'
      />
      <button type='submit'>Sign Up</button>
      {/* <p>{error}</p> */}
    </form>
  );
};

export const SignUpLink: React.FC = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

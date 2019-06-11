import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import * as ROUTES from '../../constants/routes';

const SignInPage: React.FC = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: ''
};

const SignInFormBase = (props: any) => {
  const [userInput, setUserInput] = useState(INITIAL_STATE);
  const [error, setError] = useState('');

  const onSubmit = (e: any) => {
    const { email, password } = userInput;
    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setUserInput({ ...INITIAL_STATE });
        props.history.push(ROUTES.HOME);
      })
      .catch((error: any) => {
        setError(error.message);
      });

    e.preventDefault();
  };

  const onChange = (e: any) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const { email, password } = userInput;

  const isInvalid = password === '' || email === '';

  return (
    <form onSubmit={onSubmit}>
      <input
        name='email'
        value={email}
        onChange={onChange}
        type='text'
        placeholder='Email Address'
      />
      <input
        name='password'
        value={password}
        onChange={onChange}
        placeholder='Password'
        type='text'
      />
      <button disabled={isInvalid} type='submit'>
        Sign In
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

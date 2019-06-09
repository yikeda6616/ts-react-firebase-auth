import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage: React.FC = (props: any) => (
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

const SignUpFormBase = (props: any) => {
  const [userInput, setUserInput] = useState(INITIAL_STATE);
  const [error, setError] = useState('');

  const onSubmit = (e: any) => {
    const { username, email, passwordOne } = userInput;

    props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      // If the request resolves successfully, set local state of the component to its initial state to empty the input fields.
      .then((authUser: any) => {
        setUserInput({ ...INITIAL_STATE });
        // Redirect the user to another page, a protected route for only authenticated users.
        props.history.push(ROUTES.HOME);
      })
      // If the request is rejected, set the error object in the local state.
      .catch((error: any) => {
        setError(error.message);
      });

    e.preventDefault();
  };

  const onChange = (e: any) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const { username, email, passwordOne, passwordTwo } = userInput;

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
        onChange={onChange}
        placeholder='Full Name'
      />
      <input
        type='text'
        name='email'
        value={email}
        onChange={onChange}
        placeholder='Email Address'
      />
      <input
        type='password'
        name='passwordOne'
        value={passwordOne}
        onChange={onChange}
        placeholder='Password'
      />
      <input
        type='password'
        name='passwordTwo'
        value={passwordTwo}
        onChange={onChange}
        placeholder='Confirm Password'
      />
      <button disabled={isInvalid} type='submit'>
        Sign Up
      </button>
      {error && <p className='error'>{error}</p>}
    </form>
  );
};

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);

export const SignUpLink: React.FC = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

import React, { useState } from 'react';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: ''
};

const PasswordChange = (props: any) => {
  const [userInput, setUserInput] = useState(INITIAL_STATE);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const onSubmit = (e: any) => {
    const { passwordOne } = userInput;
    props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        setUserInput({ ...INITIAL_STATE });
        setSuccess(true);
      })
      .catch((error: any) => {
        setError(error.message);
      });
    e.preventDefault();
  };

  const onChange = (e: any) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const { passwordOne, passwordTwo } = userInput;

  const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

  return (
    <form onSubmit={onSubmit}>
      <input
        type='password'
        name='passwordOne'
        value={passwordOne}
        onChange={onChange}
        placeholder='New Password'
      />
      <input
        type='password'
        name='passwordTwo'
        value={passwordTwo}
        onChange={onChange}
        placeholder='Confirm New Password'
      />
      <button disabled={isInvalid} type='submit'>
        Reset My Password
      </button>
      {error && <p>{error}</p>}
      {success && <p>Your password has been changed successfully.</p>}
    </form>
  );
};

export default withFirebase(PasswordChange);

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

const PasswordForgetPage = () => {
  return (
    <div>
      <h1>PasswordForget</h1>
      <PasswordForgetForm />
    </div>
  );
};

const PasswordForgetFormBase = (props: any) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const onSubmit = (e: any) => {
    props.firebase
      .doPasswordReset(email)
      .then(() => {
        setEmail('');
      })
      .catch((error: any) => {
        setError(error.message);
      });
    e.preventDefault();
  };

  const onChange = (e: any) => {
    setEmail(e.target.value);
  };

  const isInvalid = email === '';
  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        name='email'
        value={email}
        onChange={onChange}
        placeholder='Email Address'
      />
      <button disabled={isInvalid} type='submit'>
        Reset My Password
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

export { PasswordForgetForm, PasswordForgetLink };

import React, { useState } from 'react';
import { FirebaseContext } from '../Firebase';
import { SignUpLink } from '../SignUp';

const SignInPage: React.FC = (props: any) => (
  <div>
    <h1>SignIn</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignInForm firebase={firebase} history={props.history} />}
    </FirebaseContext.Consumer>
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: ''
};

const SignInForm = (props: any) => {
  const [userInput, setUserInput] = useState(INITIAL_STATE);
  const [error, setError] = useState('');

  const onSubmit = (e: any) => {};

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
export default SignInPage;

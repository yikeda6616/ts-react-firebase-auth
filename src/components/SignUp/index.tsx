import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const SignUpPage: React.FC = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

interface Props {}

interface State {
  username: string;
  email: string;
  passwordOne: string;
  passwordTwo: string;
  error: any;
}

const INITIAL_STATE: State = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

export class SignUpForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event: React.FormEvent<HTMLElement>) => {};

  onChange = (event: React.FormEvent<HTMLElement>) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type='text'
          name='username'
          value={username}
          onChange={this.onChange}
          placeholder='Full Name'
        />
        <input
          type='text'
          value={email}
          onChange={this.onChange}
          placeholder='Email Address'
        />
        <input
          type='password'
          name='passwordOne'
          value={passwordOne}
          onChange={this.onChange}
          placeholder='Password'
        />
        <input
          type='password'
          name='passwordTwo'
          value={passwordTwo}
          onChange={this.onChange}
          placeholder='Confirm Password'
        />
        <button type='submit'>Sign Up</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export const SignUpLink: React.FC = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

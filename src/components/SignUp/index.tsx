import React, { Component, ReactEventHandler } from 'react';
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
  error: null | string;
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

  onChange = (event: React.FormEvent<HTMLElement>) => {};

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p />
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

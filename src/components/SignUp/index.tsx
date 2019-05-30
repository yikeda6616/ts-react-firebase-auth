import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const SignUpPage: React.FC = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

interface PropType {}

export class SignUpForm extends Component {
  constructor(props: PropType) {
    super(props);
  }

  onSubmit = (event: React.FormEvent<HTMLElement>): void => {};

  onChange = (event: React.FormEvent<HTMLElement>): void => {};

  redner() {
    return <form onSubmit={this.onSubmit} />;
  }
}

export const SignUpLink: React.FC = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

export default SignUpPage;

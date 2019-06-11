import React from 'react';

import PasswordChange from '../PasswordChange';
import { PasswordForgetForm } from '../PasswordForget';

const Account: React.FC = () => (
  <div>
    <h1>Account Page</h1>
    <PasswordForgetForm />
    <PasswordChange />
  </div>
);

export default Account;

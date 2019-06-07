import React from 'react';
import { FirebaseContext } from '../Firebase';

const SignInPage: React.FC = (props: any) => (
  <div>
    <h1>SignIn</h1>
    <FirebaseContext.Consumer>
      {firebase => <SignInForm firebase={firebase} history={props.history} />}
    </FirebaseContext.Consumer>
  </div>
);

const SignInForm = (props: any) => {
  return (
    <h1>
      <div>signin form</div>
    </h1>
  );
};
export default SignInPage;

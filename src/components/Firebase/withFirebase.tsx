import React from 'react';
import { FirebaseContext } from '.';

export const withFirebase = (BaseComponent: any) => (props: any) => (
  <FirebaseContext.Consumer>
    {firebase => <BaseComponent {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default withFirebase;

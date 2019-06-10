import { useState, useEffect } from 'react';

function useAuthentication(auth: any) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listener = auth.onAuthStateChanged((authUser: any) => {
      authUser ? setAuthUser({ authUser } as any) : setAuthUser(null);
    });
    return () => {
      listener();
    };
    // Pass an empty array as a second argument.
    // This tells React that the effect doesn't depend on any values from props or state, so it never needs to re-run.
    // This way, the props and state inside the effect will always have their initial values.
    // See more detail at https://reactjs.org/docs/hooks-effect.html
  }, []);

  return authUser;
}

export default useAuthentication;

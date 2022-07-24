import { useState } from 'react';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';

const AuthScreen = () => {
  const [loginView, setLoginView] = useState(true);
  return (
    <div>
      <div className="flex justify-center mb-12">
        <h1
          className={
            loginView
              ? 'border-b border-2 text-black'
              : 'border-0 text-slate-400'
          }
          onClick={() => setLoginView(!loginView)}
        >
          Log In
        </h1>
        <h1
          className={
            loginView
              ? 'border-0 text-slate-400'
              : 'border-b border-2 text-black'
          }
          onClick={() => setLoginView(!loginView)}
        >
          Sign Up
        </h1>
      </div>
      {loginView ? <LogIn /> : <SignUp />}
    </div>
  );
};

export default AuthScreen;

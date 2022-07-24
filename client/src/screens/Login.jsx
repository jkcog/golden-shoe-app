import React from 'react';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && email) {
      console.log(email);
      console.log(password);
    }
  };

  return (
    <div className="flex-col justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col my-auto items-center justify-center bg-gray-200 p-12 rounded-xl"
      >
        <h1>Login</h1>
        <input
          id="email"
          className="border-2 my-8"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />
        <input
          id="password"
          className="border-2 my-8"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />
        <button
          className="rounded-xl text-white bg-black my-8 py-2 px-4"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

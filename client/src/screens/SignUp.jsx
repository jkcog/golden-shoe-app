import React from 'react';
import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && password === confirmPassword) {
      console.log(email);
      console.log(password);
    }
  };

  return (
    <div className="flex justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col my-auto items-center justify-center bg-gray-200 p-12 rounded-xl"
      >
        <h1>Sign Up</h1>
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
        <input
          id="confirmPassword"
          className="border-2 my-8"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="confirm password"
          required
        />
        <button
          className="rounded-xl text-white bg-black my-8 py-2 px-4"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

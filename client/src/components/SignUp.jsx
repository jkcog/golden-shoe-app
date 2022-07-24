import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && email) {
      console.log(email);
      console.log(password);
    }
  };

  return (
    <form
      className="flex flex-col items-center border-2"
      onSubmit={handleSubmit}
    >
      <label>Email</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <label>Confirm Password</label>
      <input
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default SignUp;

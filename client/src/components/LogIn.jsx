import { useState } from 'react';

const LogIn = () => {
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
    <form
      className="flex flex-col items-center justify-around border-2 mx-auto"
      onSumbit={handleSubmit}
    >
      <label>Email</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogIn;

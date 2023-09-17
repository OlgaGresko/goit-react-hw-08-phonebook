import React from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/operations';

const LogInPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginUser(formData));
  };

  return (
    <div>
      <h1>Please log in:</h1>
      <form onSubmit={handleSubmit} className='loginform'>
        <label>
          <span>Email: </span>
          <input
            type="email"
            name="userEmail"
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          <span>Password: </span>
          <input
            type="password"
            name="userPassword"
            minLength={7}
            placeholder="Enter your password"
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogInPage;

import React from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from 'redux/operations';

const SignUpPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    dispatch(signupUser(formData));
  };

  return (
    <div>
      <h1>Please sign up:</h1>
      <form onSubmit={handleSubmit} className='loginform'>
        <label>
          <span>Username: </span>
          <input
            type="text"
            name="userName"
            placeholder="Enter your name"
            required
          />
        </label>
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;

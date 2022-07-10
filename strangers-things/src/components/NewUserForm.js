import React from "react";
import { registerNewUser } from "../api";

const NewUserForm = (props) => {
  const {
    setUserToken,
    setIsLoggedIn,
    username,
    setUsername,
    password,
    setPassword,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    registerNewUser(username, password, setUserToken, setIsLoggedIn);
  };

  return (
    <>
      <div id="new-post-form">
        <form onSubmit={handleSubmit}>
          <h2>Register!</h2>
          <label htmlFor="title">Username:</label>
          <input
            type="text"
            id="login-title"
            name="login"
            required= {true}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
          <label htmlFor="body">Password:</label>
          <input
            type="password"
            id="login-password"
            name="password"
            required={true}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </>
  );
};

export default NewUserForm;

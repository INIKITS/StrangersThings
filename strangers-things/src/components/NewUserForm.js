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
          <label for="title">Username:</label>
          <input
            type="text"
            id="login-title"
            name="login"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
          <label for="body">Password:</label>
          <input
            type="text"
            id="login-password"
            name="password"
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

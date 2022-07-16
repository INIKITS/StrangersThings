import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerNewUser } from "../api";

const NewUserForm = (props) => {
  const {
    setUserToken,
    setIsLoggedIn,
    username,
    setUsername,
    password,
    setPassword,
    errorMessage,
    setErrorMessage,
    callSuccess,
    setCallSuccess,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    registerNewUser(
      username,
      password,
      setUserToken,
      setIsLoggedIn,
      setErrorMessage,
      setCallSuccess,
      callSuccess
    );
  };

  // const handleButton = (e) {
  //   e.preventDefault();
  //   navigate("./LoginForm")
  // }

  return (
    <>
      <div id="side-bar">
        <div id="new-post-form">
          <form onSubmit={handleSubmit}>
            <h2>Register!</h2>
            <label htmlFor="title">Username:</label>
            <input
              type="text"
              id="login-title"
              name="login"
              required={true}
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
            {callSuccess ? null : <p>{errorMessage}</p>}
            <button type="submit">Create Account</button>
            <Link to="/login">Have an account? Login Here!</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewUserForm;

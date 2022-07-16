import React from "react";
import { Link } from "react-router-dom";
import { login } from "../api";

const LoginForm = (props) => {
  const [error, setError] = React.useState(null);
  const {
    setUsername,
    username,
    setPassword,
    password,
    setUserToken,
    setIsLoggedIn,
    callSuccess,
    setCallSuccess,
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    login(
      username,
      password,
      setUsername,
      setPassword,
      setUserToken,
      setIsLoggedIn,
      setError,
      setCallSuccess
    );

    // if (result.success){
    //   const response = await result.json();

    //   const result = await response;

    //   console.log('result', result)

    // }else{

    // setError(result.error.message)

    // console.log('result', result)
    // }
  };

  return (
    <>
      <div id="side-bar">
        <div id="new-post-form">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
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
            {callSuccess ? null : <p>{error}</p>}
            <button type="submit">Sign In</button>
            <Link to="/">Need an Account?</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

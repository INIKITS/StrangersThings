import React from 'react'
import {Link} from 'react-router-dom'

const handleSubmit = (e) => {
    e.preventDefault();


}

const LoginForm = (props) => {
    const {setUsername, setPassword} = props;

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
            <button type="submit">Sign In</button>
            <Link to="/">Need an Account?</Link>
          </form>
          </div>
        </div>
       
      </>

    )
}

export default LoginForm;
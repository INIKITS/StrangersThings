import React from 'react'

const handleSubmit = (e) => {
    e.preventDefault();


}

const LoginForm = () => {
    return (
        <>
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
          </form>
        </div>
      </>

    )
}

export default LoginForm;
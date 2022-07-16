import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Nav,
  Profile,
  Posts,
  LoginForm,
  NewUserForm,
  NewPostForm,
  Footer,
} from "./components";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userToken, setUserToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [callSuccess, setCallSuccess] = useState(true);

  console.log("userToken", userToken);
  console.log("isLoggedIn", isLoggedIn);

  return (
    <>
      <Nav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserToken={setUserToken}
      />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
              {isLoggedIn ? null : (
                <NewUserForm
                  setUserToken={setUserToken}
                  setIsLoggedIn={setIsLoggedIn}
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                  callSuccess={callSuccess}
                  setCallSuccess={setCallSuccess}
                />
              )}
            </>
          }
        />

        <Route
          exact
          path="/posts"
          element={
            <>
              <Posts />
              {isLoggedIn ? (
                <NewPostForm
                  setNewTitle={setNewTitle}
                  setNewBody={setNewBody}
                />
              ) : (
                <NewUserForm
                  setUserToken={setUserToken}
                  setIsLoggedIn={setIsLoggedIn}
                  username={username}
                  setUsername={setUsername}
                  password={password}
                  setPassword={setPassword}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
                  callSuccess={callSuccess}
                  setCallSuccess={setCallSuccess}
                />
              )}
            </>
          }
        />

        <Route
          exact
          path="/login"
          element={
            <>
              <Home />
              <LoginForm
                setUserToken={setUserToken}
                setIsLoggedIn={setIsLoggedIn}
                setUsername={setUsername}
                setPassword={setPassword}
                username={username}
                password={password}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
                callSuccess={callSuccess}
                setCallSuccess={setCallSuccess}
              />
            </>
          }
        />

        <Route exact path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

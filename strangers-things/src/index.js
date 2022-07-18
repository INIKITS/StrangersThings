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
  NewMessageForm,
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
  const [message, setMessage] = useState("");
  const [messageId, setMessageId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [callSuccess, setCallSuccess] = useState(true);
  const [allPosts, setAllPosts] = useState([]);
  const [isOwner, setIsOwner] = useState(false);

  console.log("userToken", userToken);
  console.log("isLoggedIn", isLoggedIn);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
      const userInfo = JSON.parse(user);
      console.log("user", userInfo.token);
      setUserToken(userInfo.token);
    }
  }, []);

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
              <Posts
                isLoggedIn={isLoggedIn}
                setAllPosts={setAllPosts}
                allPosts={allPosts}
                isOwner={isOwner}
                setIsOwner={setIsOwner}
                userToken={userToken}
                setMessageId={setMessageId}
              />
              {isLoggedIn ? (
                <NewPostForm
                  setAllPosts={setAllPosts}
                  setNewTitle={setNewTitle}
                  setNewBody={setNewBody}
                  newTitle={newTitle}
                  newBody={newBody}
                  userToken={userToken}
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

        <Route
          exact
          path="/profile"
          element={<Profile userToken={userToken} />}
        />

        <Route
          path=":posts/new-message"
          element={
            <>
              <Posts
                isLoggedIn={isLoggedIn}
                setAllPosts={setAllPosts}
                allPosts={allPosts}
                isOwner={isOwner}
                setIsOwner={setIsOwner}
                userToken={userToken}
                setMessageId={setMessageId}
              />
              <NewMessageForm
                userToken={userToken}
                message={message}
                setMessage={setMessage}
                messageId={messageId}
              />
            </>
          }
        />
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

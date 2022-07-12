import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Nav,
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

  console.log("userToken", userToken);
  console.log("isLoggedIn", isLoggedIn);

  // useEffect(() => {
  //   const checkIsLoggedIn = () => {
  //     const user = JSON.parse(localStorage.getItem('user'))
  //     console.log('user.token', user.token)
  //     if (user.token) {setIsLoggedIn(true)
  //     console.log('it is true')
  //   } else{
  //     setIsLoggedIn(false)
  //   }
  //   checkIsLoggedIn();

  // }},[])

  return (
    <>
      <Nav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUserToken={setUserToken}
      />
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
        {/* <div id='main-content'> */}
        {/* <Route  exact path='/posts' element={<><Posts/> <NewPostForm/> </>}></Route> */}
        {/* </div> */}
        {/* <div id='sidebar'> */}
        {isLoggedIn ? (
          <Route path="/new-post" element={<NewPostForm />}></Route>
        ) : null}
        <Route exact path="/" element={<NewUserForm />} />
        {/* {isLoggedIn  ? <NewPostForm setNewTitle={setNewTitle} setNewBody={setNewBody}/> : <NewUserForm setUserToken={setUserToken} setIsLoggedIn = {setIsLoggedIn} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>} */}
        <Route
          path="/login"
          element={
            <LoginForm setUsername={setUsername} setPassword={setPassword} />
          }
        ></Route>
        {/* </div> */}
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

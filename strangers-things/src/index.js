import React from "react";
import { useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router} from "react-router-dom";
import { Nav, Posts, NewUserForm, NewPostForm, Footer } from "./components";

const App = () => {
  const [username,setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [userToken, setUserToken] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [newTitle, setNewTitle] = useState('')
  const [newBody, setNewBody] = useState('');

  console.log('userToken', userToken)
  console.log('isLoggedIn', isLoggedIn)

  useEffect(() => {
    const checkIsLoggedIn = () => {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user.token) {setIsLoggedIn(true)}
      console.log('it is true')
    }
    checkIsLoggedIn();

  },[])


  return (
    
    <>
      < Nav isLoggedIn = {isLoggedIn} />
      <div id='main-content'>
      <Posts />
      </div>
      <div id='sidebar'>
      {isLoggedIn  ? <NewPostForm setNewTitle={setNewTitle} setNewBody={setNewBody}/> : <NewUserForm setUserToken={setUserToken} setIsLoggedIn = {setIsLoggedIn} username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}
      </div>
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

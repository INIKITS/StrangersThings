import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router} from "react-router-dom";
import { Nav, Posts, NewPostForm, Footer } from "./components";

const App = () => {
  return (
    
    <Router>
      < Nav />
      <div id='main-content'>
      <Posts />
      </div>
      <div id='sidebar'>
      <NewPostForm />
      </div>
      <Footer />
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

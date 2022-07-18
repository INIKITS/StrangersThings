import React from "react";
import { makeNewPost, getAllPosts } from "../api";
import { useEffect } from "react";

const NewPostForm = (props) => {
  const { setAllPosts, setNewTitle, setNewBody, newTitle, newBody, userToken } =
    props;

  const [price, setPrice] = React.useState("");
  const [willDeliver, setWillDeliver] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    makeNewPost(setAllPosts, newTitle, newBody, price, willDeliver, userToken);
    // updatePosts();
  };

  useEffect(() => {
    getAllPosts(setAllPosts);
  }, []);

  return (
    <>
      <div id="side-bar">
        <div id="new-post-form">
          <form onSubmit={handleSubmit}>
            <h2>Make a new post!</h2>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="post-title"
              name="title"
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
            ></input>
            <label htmlFor="body">Body:</label>
            <input
              type="text"
              id="post-body"
              name="body"
              onChange={(e) => {
                setNewBody(e.target.value);
              }}
            ></input>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="post-body"
              name="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            ></input>
            <label htmlFor="deliver">Will Deliver</label>
            <input
              type="checkbox"
              id="post-body"
              name="deliver"
              onChange={(e) => {
                setWillDeliver(e.target.checked);
              }}
            ></input>
            <button type="submit">Post baybeeeee</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPostForm;

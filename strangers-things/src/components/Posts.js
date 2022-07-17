import React from "react";
import { getAllPosts } from "../api";
import { useEffect } from "react";

const Posts = (props) => {
  console.log("getAllPosts", getAllPosts);

  const { allPosts, setAllPosts } = props;

  // const fetchAllPosts = async () => {
  //   const request = getAllPosts(setAllPosts);

  // }

  useEffect(() => {
    // fetchAllPosts();
    getAllPosts(setAllPosts);
  }, []);

  console.log("allPosts", allPosts);

  return (
    <div id="main-content">
      <span id="search-bar-area">
        <input id="search-bar" type="text" placeholder="search posts"></input>
        <button id="search-button">Search</button>
      </span>
      <div id="post-area">
        {allPosts.data.posts.map((post) => {
          console.log("post", post);
          return (
            <div key={post._id} id="post-card">
              <span id="card-title">{post.title} </span>
              <span id="card-author">{post.author.username} </span>
              <span id="card-price">{post.price}</span>
              <div id="card-main">{post.description}</div>
              <button id="card-edit">edit</button>
              <button id="card-delete">delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;

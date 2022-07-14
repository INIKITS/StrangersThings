import React from "react";
import { useEffect, useState } from "react";
import { getAllPosts } from "../api";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts();

      setAllPosts(data.data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div id="main-content">
      <span id="search-bar-area">
        <input id="search-bar" type="text" placeholder="search posts"></input>
        <button id="search-button">Search</button>
      </span>
      <div id="post-area">
        {allPosts.map((post) => {
          return (
            <div key={post._id} id="post-card">
              <span id="card-title">{post.title} </span>
              <span id="card-author">{post.author.username} </span>
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

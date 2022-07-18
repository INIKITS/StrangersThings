import React from "react";
import { useEffect, useCallback } from "react";
import { deletePost, getAllPosts } from "../api";
import { useNavigate } from "react-router-dom";

const Posts = (props) => {
  console.log("getAllPosts", getAllPosts);

  const { allPosts, setAllPosts, userToken, isLoggedIn, setMessageId } = props;

  const refreshPosts = useCallback(() => {});

  const handleDelete = (id) => {
    deletePost(id, userToken);
    refreshPosts();
  };

  let navigate = useNavigate();
  const handleMessage = (id) => {
    navigate("new-message", { replace: true });
    setMessageId(id);
  };

  useEffect(() => {
    getAllPosts(setAllPosts, userToken);
  }, []);

  console.log("allPosts", allPosts);

  return (
    <div id="main-content">
      <span id="search-bar-area">
        <input id="search-bar" type="text" placeholder="search posts"></input>
        <button id="search-button">Search</button>
      </span>
      <div id="post-area">
        {allPosts?.data?.posts.map((post) => {
          console.log("post", post);
          return (
            <div key={post._id} id="post-card">
              <span id="card-title">{post.title} </span>
              <span id="card-author">{post.author.username} </span>
              <span id="card-price">{post.price}</span>
              <div id="card-main">{post.description}</div>
              {isLoggedIn ? (
                post.isAuthor ? (
                  <>
                    <button className="card-edit">edit</button> this
                    <button
                      id={post._id}
                      className="card-delete"
                      onClick={(event) => handleDelete(event.target.id)}
                    >
                      delete
                    </button>
                  </>
                ) : (
                  <button
                    id={post._id}
                    className="card-edit"
                    onClick={(event) => handleMessage(event.target.id)}
                  >
                    message
                  </button>
                )
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;

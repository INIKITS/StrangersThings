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
    <div id="post-area">
      {allPosts.map((post) => {
        // console.log("post", post);

        return (
          <div key={post.author.id} id="post-card">
            <div key={post.author.id}>{post.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;

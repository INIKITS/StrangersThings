import React from "react";

const SearchPosts = (props) => {
  const { posts, searchTerm } = props;

  console.log("posts", posts);
  console.log("searchTerm", searchTerm);

  function postMatches(post, text) {
    // return true if any of the fields you want to check against include the text
    // strings have an .includes() method
    // console.log("text", text);
    // console.log("post", post);
  }

  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;
};

export default SearchPosts;
// then, in our jsx below... map over postsToDisplay instead of posts

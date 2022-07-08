import React from "react";

const NewPostForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("it has been clicked");
  };

  return (
    <>
      <div id="new-post-form">
        <h2>Make a new post!</h2>
      <form onSubmit={handleSubmit}>
        <label for="title">Title:</label>
        <input type="text" id="title" name="title"></input>
        <label for="body">Body:</label>
        <input type="text" id="body" name="body"></input>
        <button type="submit">post it baybeee</button>
      </form>
      </div>
    </>
  );
};

export default NewPostForm;

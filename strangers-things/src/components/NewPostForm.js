import React from "react";

const NewPostForm = (props) => {
    const {setNewTitle, setNewBody} = props;


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("it been clicked");
  };

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
          <button type="submit">Post baybeeeee</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default NewPostForm;

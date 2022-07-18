import React from "react";
import { sendMessage } from "../api";

const NewMessageForm = (props) => {
  const { message, setMessage, messageId, userToken } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(message, messageId, userToken);
  };

  return (
    <>
      <div id="side-bar">
        <div id="new-post-form">
          <form onSubmit={handleSubmit}>
            <h2>Message User</h2>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="post-title"
              name="title"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></input>

            <button type="submit">send message</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewMessageForm;

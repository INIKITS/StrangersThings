import React from "react";
import { useEffect } from "react";
import { getProfile } from "../api";

const Profile = (props) => {
  const { userToken, username } = props;
  const [profileInfo, setProfileInfo] = React.useState({});

  useEffect(() => {
    getProfile(userToken, setProfileInfo);
  }, []);

  return (
    <>
      <div id="main-content">
        <h1>{profileInfo.data?.username}'s messages</h1>
        <div>
          <div id="message-card-container">
            <span> inbox: </span>
            {profileInfo.data?.messages.map((message) => {
              return (
                <>
                  <h3> {message.fromUser.username}</h3>
                  <div>{message.content}</div>
                </>
              );
            })}
          </div>
        </div>
        <h2>Outbox:</h2>
        {/* {profileInfo.data?.posts.map((post) => {
          return (
            <>
              <div id="profile-post-card">
                <h4>{post.title}</h4>
                <span id="profile-post-price">Price: ${post.price}</span>
                <div id="profile-post-body"> {post.description}</div>
                <span id="will-deliver">Will Deliver: {post.willDeliver}</span>
                <button id="profile-post-edit">Edit</button>
                <button id="profile-post-delete">Delete</button>
              </div>
            </>
          );
        })} */}
      </div>
    </>
  );
};

export default Profile;

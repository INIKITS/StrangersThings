import React from "react";
import { useEffect } from "react";
import { getProfile } from "../api";

const Profile = (props) => {
  const { userToken } = props;
  const [profileInfo, setProfileInfo] = React.useState({});

  useEffect(() => {
    getProfile(userToken, setProfileInfo);
  }, []);

  console.log("profileInfo", profileInfo);

  return (
    <>
      <div id="main-content">
        <h1>{profileInfo.data?.username}</h1>
        <div id="message-card">
          <h2>Messages: </h2>
          <h3>{profileInfo.data?.messages}</h3>
        </div>
        <h2>Posts: </h2>
        {profileInfo.data?.posts.map((post) => {
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
        })}
      </div>
    </>
  );
};

export default Profile;

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
      <h1>{profileInfo.data?.username}</h1>
      <div id="message-card">
        <h3>{profileInfo.data?.messages}</h3>
      </div>
      <div id="profile-post-card">
        <h3>{profileInfo.data?.posts}</h3>
      </div>
    </>
  );
};

export default Profile;

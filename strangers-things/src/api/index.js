import React from "react";
import { useEffect } from "react";

export const BASE_URL = `https://strangers-things.herokuapp.com/api/2204-ftb-web-pt`;

export async function getAllPosts(setAllPosts, userToken) {
  // if (userToken) {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
        // body: JSON.stringify({
        //   user: {
        //     _id: `${userToken}`,
        //   },
        // }),
      },
    });
    const data = await response.json();

    return setAllPosts(data);
  } catch (error) {
    throw error;
  }
  // }
  //  else {
  //   try {
  //     const response = await fetch(`${BASE_URL}/posts`);
  //     const data = await response.json();

  //     return setAllPosts(data);
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}

export function registerNewUser(
  username,
  password,
  setUserToken,
  setIsLoggedIn,
  setErrorMessage,
  setCallSuccess
) {
  fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: `${username}`,
        password: `${password}`,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.data?.token) {
        setUserToken(result.data.token);
        window.localStorage.setItem(
          "user",
          JSON.stringify({
            username: `${username}`,
            password: `${password}`,
            _id: `${result.data._id}`,
            token: `${result.data.token}`,
          })
        );
        setIsLoggedIn(true);
      } else if (result.error.message) {
        setErrorMessage(result.error.message);
        setCallSuccess(false);
        setTimeout(() => {
          setCallSuccess(true);
        }, 2000);
      }
      return result;
    })
    .catch(console.error);
}

export function login(
  username,
  password,
  setUsername,
  setPassword,
  setUserToken,
  setIsLoggedIn,
  setError,
  setCallSuccess
) {
  fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username: `${username}`,
        password: `${password}`,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        setUserToken(result.data.token);
        setIsLoggedIn(true);
        window.localStorage.setItem(
          "user",
          JSON.stringify({
            username: `${username}`,
            password: `${password}`,
            _id: `${result.data._id}`,
            token: `${result.data.token}`,
          })
        );
      } else if (result.error.message) {
        setError(result.error.message);
        setCallSuccess(false);
        setTimeout(() => {
          setCallSuccess(true);
        }, 2000);
      }

      return result;
    })
    .catch(console.error);
}

export function getProfile(userToken, setProfileInfo) {
  fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      setProfileInfo(result);
      return result;
    })
    .catch(console.error);
}

export function makeNewPost(
  setAllPosts,
  newTitle,
  newBody,
  price,
  willDeliver,
  userToken
) {
  fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify({
      post: {
        title: `${newTitle}`,
        description: `${newBody}`,
        price: `${price}`,
        willDeliver: `${willDeliver}`,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      getAllPosts();

      return result;
    })
    .catch(console.error);
}

export function deletePost(postId, userToken) {
  fetch(`${BASE_URL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch(console.error);
}

export function sendMessage(messageBody, postId, userToken) {
  fetch(`${BASE_URL}/posts/${postId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify({
      message: {
        content: `${messageBody}`,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch(console.error);
}

export function logout(setUserToken, setIsLoggedIn) {
  setIsLoggedIn(false);
  setUserToken("");
  localStorage.clear();
}

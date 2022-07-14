import React from "react";

export const BASE_URL = `https://strangers-things.herokuapp.com/api/2204-ftb-web-pt`;

export async function getAllPosts() {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
}

export function registerNewUser(
  username,
  password,
  setUserToken,
  setIsLoggedIn
) {
  fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      setIsLoggedIn(true);
      setUserToken(result.data.token);
      window.localStorage.setItem(
        "user",
        JSON.stringify({
          username,
          password,
          token: result.data.token,
        })
      );
      return result;
    })
    .catch(console.error);
}

export function login(username, password, setUsername, setPassword) {
  console.log("login has been called");
  fetch(
    "https://strangers-things.herokuapp.com/api/COHORT-NAME/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      // setUsername("");
      // setPassword("");

      return result;
    })
    .catch(console.error);
}

export function logout(setUserToken, setIsLoggedIn) {
  setIsLoggedIn(false);
  setUserToken("");
  localStorage.clear();
}

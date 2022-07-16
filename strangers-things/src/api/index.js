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
      console.log(["result", result]);
      if (result.data?.token) {
        setUserToken(result.data.token);
        window.localStorage.setItem(
          "user",
          JSON.stringify({
            username: `${username}`,
            password: `${password}`,
            token: `${result.data.token}`,
          })
        );
        setIsLoggedIn(true);
      } else if (result.error.message) {
        console.log(result.error.message);
        setErrorMessage(result.error.message);
        setCallSuccess(false);
        setTimeout(() => {
          setCallSuccess(true)
        }, 2000);
      }
      return result;
    })
    .catch(console.error);
}

export function login(username, password, setUsername, setPassword, setUserToken, setIsLoggedIn, setError, setCallSuccess) {
  console.log("login has been called");
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
      console.log('result', result)

      if (result.success){
        setUserToken(result.data.token)
        setIsLoggedIn(true);

      } else if (result.error.message) {
        setError(result.error.message)
        setCallSuccess(false);
        setTimeout(() => {
          setCallSuccess(true)
        }, 2000);
      }

      return result;
    })
    .catch(console.error);
}

export function logout(setUserToken, setIsLoggedIn) {
  setIsLoggedIn(false);
  setUserToken("");
  localStorage.clear();
}

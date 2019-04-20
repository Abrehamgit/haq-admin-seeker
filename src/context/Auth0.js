// we don't need react and the component here
//import React, { Component } from "react";

/**
 * this is the authentication service provider
 */
import auth0 from "auth0-js";
import history from "../history";

const AUTH0_CALLBACK_URI = process.env.REACT_APP_AUTH0_CALLBACK_URI;

export default class Auth {
  accessToken;
  idToken;
  expiresAt;

  auth0 = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: AUTH0_CALLBACK_URI,
    responseType: "token id_token",
    scope: "openid email profile"
  });

  login = () => {
    this.auth0.authorize();
  };

  handleAuthentication = () => {
    this.auth0.parseHash((err, authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken) {
        this.setSession(authResults);
      } else if (err) {
        history.replace("/");
      }
    });
  };

  getAccessToken = () => {
    return this.accessToken;
  };

  getIdToken = () => {
    return this.idToken;
  };

  setSession = (authResult, continueSession) => {
    localStorage.setItem("isLoggedIn", "true");
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
  };

  firstLogin() {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          localStorage.setItem("isLoggedIn", "true");
          this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
          this.accessToken = authResult.accessToken;
          this.idToken = authResult.idToken;
          history.push("/");
          window.location.reload();
          resolve(authResult);
        } else if (err) {
          if (
            err.error_description &&
            err.error === "unauthorized" &&
            err.error_description.split("|")[1] ===
              "Please verify your email before logging in."
          ) {
            reject(err);
          } else {
            this.logout();
          }
        }
      });
    });
  }

  renewSession(continueSession) {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult, continueSession);
          resolve(authResult);
        } else if (err) {
          if (
            err.error_description &&
            err.error === "unauthorized" &&
            err.error_description.split("|")[1] ===
              "Please verify your email before logging in."
          ) {
            reject(err);
          } else {
            this.logout();
          }
        }
      });
    });
  }

  logout = () => {
    // remove tokens and the isLoggedIn flag from localStorage
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = 0;
    localStorage.removeItem("isLoggedIn");
    window.location = `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/v2/logout?returnTo=https%3A%2F%2Fsocionado.com`;
  };

  isAuthenticated = () => {
    // check if the token has expired
    return new Date().getTime() < this.expiresAt;
  };
}

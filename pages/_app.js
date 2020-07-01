import React from "react";
import App from "next/app";
import Router from "next/router";
import { useRouter } from "next/router";
import UserContext from "../components/UserContext";
import Home from "./index";

class MyApp extends App {
  state = {
    user: null,
  };

  componentDidMount = () => {
    const user = localStorage.getItem("menuapp-user");
    if (user) {
      this.setState({ user });
    } else {
      Router.push("/signin");
    }
  };

  signIn = (username, password) => {
    localStorage.setItem("menuapp-user", username);

    if (username == "employee") {
      this.setState(
        {
          user: username,
        },
        () => {
          Router.push("/employee");
        }
      );
    }
    if (username == "admin") {
      this.setState(
        {
          user: username,
        },
        () => {
          Router.push("/admin");
        }
      );
    }

    // let permission = true;
    // const router = useRouter();
    // if (router.pathname.startsWith("/employee") && username !== "employee") {
    //  permission = false;
    //   Router.push("/");
    // }
    // if (router.pathname.startsWith("/admin") && username !== "admin") {
    //  permission = false;
    //   Router.push("/");
    // }
  };

  signOut = () => {
    localStorage.removeItem("menuapp-user");
    this.setState({
      user: null,
    });
    Router.push("/signin");
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <UserContext.Provider
        value={{
          user: this.state.user,
          signIn: this.signIn,
          signOut: this.signOut,
        }}
      >
        <Component {...pageProps} />
      </UserContext.Provider>
    );
  }
}

export default MyApp;

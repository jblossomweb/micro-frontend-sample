import React from "react";
import { mount } from "auth/AuthApp";
import useApp from "../hooks/useApp";

const AuthApp = ({ onSignIn }) => {
  const ref = useApp(mount, onSignIn);

  return <div ref={ref} />;
};

export default AuthApp;

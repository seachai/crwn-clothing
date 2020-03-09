import React from "react";

import "./Button.scss";

const Button = ({ children, isGoogleSignIn, inverted, ...props }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}${
        isGoogleSignIn ? "google-sign-in" : ""
      } input-button`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

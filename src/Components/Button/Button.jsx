import React from "react";

import "./Button.scss";

const Button = ({ children, isGoogleSignIn, ...props }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} input-button`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

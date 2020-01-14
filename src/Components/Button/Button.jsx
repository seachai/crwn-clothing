import React from "react";

import "./Button.scss";

const Button = ({ children, ...props }) => {
  return (
    <button className="input-button" {...props}>
      {children}
    </button>
  );
};

export default Button;

import React from "react";
import { withRouter } from "react-router-dom";
import "./Menu_Item.scss";

const Menu_Item = ({ title, imageUrl, size, linkUrl, history }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push({ linkUrl })}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default withRouter(Menu_Item);

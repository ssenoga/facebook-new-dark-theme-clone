import React from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";

import "./likes.css";

export default function Likes() {
  return (
    <div className="app__likes">
      <div className="likes__count">
        <div className="likes__rounded">
          <ThumbUpAltIcon className="like" />
        </div>
        7
      </div>

      <div>
        <p>3 comments 4 shares </p>
      </div>
    </div>
  );
}

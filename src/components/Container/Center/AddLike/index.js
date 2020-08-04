import React from "react";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ShareIcon from "@material-ui/icons/Share";

import "./addLike.css";

export default function AddLike() {
  return (
    <div className="addLike__buttons">
      <button>
        {" "}
        <ThumbUpAltIcon /> Like
      </button>
      <button>
        <ChatBubbleOutlineIcon /> Comment
      </button>
      <button>
        {" "}
        <ShareIcon /> Share
      </button>
    </div>
  );
}

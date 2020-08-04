import React from "react";

import "./center.css";
import Header from "./Header";
import Text from "./Text";
import Image from "./Image";
import Likes from "./Likes";
import AddLike from "./AddLike";
import Comments from "./Comments";

export default function Center() {
  return (
    <div className="center__container">
      <div className="post">
        <Header />
        <Text />
        <Image />
        <Likes />
        <AddLike />
        <Comments />
        {/* comments -> input & comment->list */}
      </div>
    </div>
  );
}

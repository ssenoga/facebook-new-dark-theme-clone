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
      <div className="home__header">
        <div className="home__story">
          <img alt="image here" src={require("../../../images/profile.png")} />
          <div className="user-image">
            <img alt="" src={require("../../../images/profile.png")} />
          </div>
        </div>

        <div className="home__story">
          <img alt="image here" src={require("../../../images/profile.png")} />
          <div className="user-image">
            <img alt="" src={require("../../../images/profile.png")} />
          </div>
        </div>

        <div className="home__story">
          <img alt="image here" src={require("../../../images/profile.png")} />
          <div className="user-image">
            <img alt="" src={require("../../../images/profile.png")} />
          </div>
        </div>

        <div className="home__story">
          <img alt="image here" src={require("../../../images/profile.png")} />
          <div className="user-image">
            <img alt="" src={require("../../../images/profile.png")} />
          </div>
        </div>

        <div className="home__story">
          <img alt="image here" src={require("../../../images/profile.png")} />
          <div className="user-image">
            <img alt="" src={require("../../../images/profile.png")} />
          </div>
        </div>
      </div>
      <div className="post">
        <Header />
        <Text />
        <Image />
        <Likes />
        <AddLike />
        <Comments />
        {/* comments -> input & comment->list */}
      </div>

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

import React from "react";
import Avatar from "@material-ui/core/Avatar";
import PublicIcon from "@material-ui/icons/Public";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import "./header.css";

export default function Header() {
  return (
    <div className="central__header">
      <div className="central__user">
        <Avatar
          // src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-1/cp0/c0.1.40.40a/p40x40/110304055_283064242951314_2645360784576937449_n.jpg?_nc_cat=106&_nc_sid=7206a8&_nc_ohc=rccEl_qWk1IAX-Hqh9c&_nc_ht=scontent-dfw5-2.xx&oh=0746086813244db6b06d2c86d7ff2c26&oe=5F4F9C98"
          alt="profile"
          className="header__avatar"
        />
        <div className="header__text">
          <h5>Ssendagire Charles</h5>
          <p>
            5h <sup>.</sup>
            <PublicIcon style={{ fontSize: "1rem" }} />
          </p>
        </div>
      </div>
      <div>
        <MoreVertIcon />
      </div>
    </div>
  );
}

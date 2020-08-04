import React from "react";
import AddIcon from "@material-ui/icons/Add";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import "./rightComponent.css";

export default function RightComponet() {
  return (
    <div class="right">
      <div className="right__rounded">
        <img
          className="right__round"
          alt="profile"
          src="https://scontent.xx.fbcdn.net/v/t1.0-1/cp0/c0.0.50.50a/p50x50/102708947_2578533219077879_3641064439634590486_n.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_ohc=EPmuo-IjNVcAX_55efe&_nc_ht=scontent.xx&oh=2445f9c6c0eec5005616b8f41bdd6956&oe=5F4E4240"
        />
        Ssenoga
      </div>
      <div className="right__round">
        <AddIcon />
      </div>
      <div className="right__round">
        <ChatIcon />
      </div>
      <div className="right__round">
        <NotificationsNoneIcon />
        <span>99</span>
      </div>
      <div className="right__round">
        <ArrowDropDownIcon />
      </div>
    </div>
  );
}

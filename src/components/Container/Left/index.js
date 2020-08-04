import React from "react";
import PolicyIcon from "@material-ui/icons/Policy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import ChatIcon from "@material-ui/icons/Chat";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import "./left.css";
import { Avatar } from "@material-ui/core";
export default function Left() {
  return (
    <div className="container__left">
      <ul>
        <li>
          <PolicyIcon style={{ color: "pink" }} className="container__icon" />{" "}
          COVID-19 Information Center
        </li>
        <li>
          <PeopleAltIcon
            style={{ color: "lightblue" }}
            className="container__icon"
          />{" "}
          Friends
        </li>
        <li>
          <ChatIcon
            style={{ color: "lightblue" }}
            className="container__icon"
          />{" "}
          Messenger
        </li>
        <li>
          <EventAvailableIcon
            style={{ color: "white" }}
            className="container__icon"
          />{" "}
          Events
        </li>
        <li>
          <OndemandVideoIcon
            style={{ color: "lightblue" }}
            className="container__icon"
          />{" "}
          Videos
        </li>
        <li>
          <GroupAddIcon
            style={{ color: "lightblue" }}
            className="container__icon"
          />{" "}
          Groups
        </li>
        <li>
          <Avatar className="circle">
            <ArrowDropDownIcon
              style={{ color: "white", fontSize: "2rem", margiLeft: "20px" }}
              className="container__icon"
            />
          </Avatar>{" "}
          More
        </li>
      </ul>
      <hr />
    </div>
  );
}

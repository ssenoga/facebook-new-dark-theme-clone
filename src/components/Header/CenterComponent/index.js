import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import GroupIcon from "@material-ui/icons/Group";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import FlagIcon from "@material-ui/icons/Flag";

import "./centerComponent.css";

export default function CenterComponent() {
  return (
    <div className="center">
      <div className="center__logos active">
        <HomeIcon className="center__logo" />
      </div>
      <div className="center__logos">
        <FlagIcon className="center__logo" />
      </div>
      <div className="center__logos">
        <OndemandVideoIcon className="center__logo" />
      </div>
      <div className="center__logos">
        <GroupIcon className="center__logo" />
      </div>
      <div className="center__logos">
        <SportsEsportsIcon className="center__logo" />
      </div>
    </div>
  );
}

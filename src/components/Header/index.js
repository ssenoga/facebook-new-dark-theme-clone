import React from "react";

import "./header.css";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import CenterComponent from "./CenterComponent";

export default function Header() {
  return (
    <div className="header">
      {/* left component */}
      <LeftComponent />
      {/* center component */}
      <CenterComponent />
      {/* right componet */}
      <RightComponent />
    </div>
  );
}

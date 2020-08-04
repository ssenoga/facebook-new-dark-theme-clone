import React from "react";

import "./container.css";

import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

export default function Container() {
  return (
    <div className="app__container">
      {/* left */}
      <Left />
      {/* center */}
      <Center />
      {/* right */}
      <Right />
    </div>
  );
}

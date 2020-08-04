import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Container from "./components/Container";

export default function App() {
  return (
    <div className="App">
      {/* header goes here */}
      <Header />
      {/* container goes here */}
      <Container />
    </div>
  );
}

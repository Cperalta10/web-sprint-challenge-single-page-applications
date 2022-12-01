import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="headerPage">
      <h1 className="titleHeader">Bloomtech Eats</h1>
      <div>
        <Link to="/" className="linkBtn homeBtn">
          Home
        </Link>
        <Link to="/" className="linkBtn helpBtn">
          Help
        </Link>
      </div>
    </div>
  );
}

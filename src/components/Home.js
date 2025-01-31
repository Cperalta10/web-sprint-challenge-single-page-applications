import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homepage">
      <h2>Your favorite food, delivered while coding</h2>
      <Link to="/pizza" id="order-pizza" className="linkBtn imgBackround">
        Pizza?
      </Link>
    </div>
  );
}

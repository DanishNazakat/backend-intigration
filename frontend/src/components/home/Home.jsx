import React from "react";
import "./home.css";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-content">
        <h1>
          Book Your Ride <br /> Easily & Safely
        </h1>

        <p>
          Trucks, Vans aur Buses ke liye fast aur reliable ride booking.
          Pakistan based simple solution.
        </p>

        <div className="home-buttons">
          <button onClick={() => navigate("/signup")}>Get Started</button>
          <button className="outline" onClick={() => navigate("/login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

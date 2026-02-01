import React from "react";
import "./home.css";
import { useNavigate } from "react-router";
import Navbar from "../navbar/navbar";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section className="home">
        <div className="home-content">
          <h1>
            Book Your Ride <br />
            <span>Fast, Easy & Safe</span>
          </h1>

          <p>
            Trucks, Vans aur Buses ke liye fast aur reliable ride booking.
            Pakistan ka simple transport solution.
          </p>

          <div className="home-buttons">
            <button className="primary" onClick={() => navigate("/signup")}>
              Get Started
            </button>
            <button className="secondary" onClick={() => navigate("/login")}>
              Login
            </button>
          </div>

          {/* 🔽 Cards Section */}
          <div className="home-cards">
            <div className="card">
              <h3>For Customers</h3>
              <p>Apni ride book karein trucks, vans aur buses ke liye.</p>
            </div>

            <div className="card">
              <h3>For Drivers</h3>
              <p>Rides accept karein aur apni earning barhayein.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

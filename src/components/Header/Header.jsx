import React from 'react';
import '../Bootstrap/bootstrap.bundle.js';  
import '../Bootstrap/bootstrap.css';        
import { Link } from 'react-router-dom';
import "./Header.css";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-md" style={{ backgroundColor: "#7AB2D3" }}>
        <div className='border border-primary m-2'>Here will be icon</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"  
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

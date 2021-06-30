import React from "react";
import "./style.css";
import { Val } from "../../assets";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="projects-card">
        <div>
          <img src={Val} alt="poster" />
        </div>
        <div>
          <h4>Construction of School</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa.</p>
          <Link to="/projectsdisplay">READ MORE...</Link>
        </div>
      </div>
    </>
  );
};

export { Card };

import React from "react";
import "./style.css";
import { Val } from "../../assets";

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
        </div>
      </div>
    </>
  );
};

export { Card };

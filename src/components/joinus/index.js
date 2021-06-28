import React from "react";
import { DonateBtn } from "../buttons";
import "./style.css";

const JoinUs = ({bgImg}) => {
  return (
    <>
      <section className="join-container" style={{backgroundImage:`url(${bgImg})`}}>
        <div className="join-overlay">
          <div className="join-overlay-content">
            <h2>Join Our Action!</h2>
            <p>
              We envision a world without poverty or hunger. <br /> Let's make
              it happen
            </p>
            <div style={{marginTop:'40px'}}>
              <DonateBtn border_color='#fff' text_color='#fff' bgColor='inherit'/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { JoinUs };

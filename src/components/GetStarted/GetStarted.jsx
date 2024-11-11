import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Fusce fermentum purus at tincidunt hendrerit.
          </span>

          <button className="button">
            <a href="mailto:u.beyza.simsek@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

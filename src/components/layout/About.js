import React from "react";
import dev from "./dev.jpg";
export default () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <img className="avator" src={dev} alt="Site Developer" />
          <div className="icons">
            <a href="https://www.linkedin.com/in/karan-mahajan-58543812a">
              <i className="fab fa-linkedin text-primary" />
            </a>
            <a href="https://www.youtube.com/channel/UCzFU4dsDRuPId4GJhhdkvkQ">
              <i className="fab fa-youtube text-danger" />
            </a>
            <a href="https://github.com/karan919">
              <i className="fab fa-github-square text-secondary" />
            </a>
          </div>
        </div>
        <div className="col-md-9">
          <div className="about">
            <h1>About</h1>
            <p>
              This Application will store client data and will calculate how
              much they owe to the company. Data is fetched and stored in
              firebase database.
            </p>
            <p className="spinner-text">Work in progress....</p>
            <div className="spinner">
              <div className="dot dot1" />
              <div className="dot dot2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

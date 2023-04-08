import React from "react";
import "./contest_page.css";
import background from "../../assets/background.png";

const Contest_home = () => {
  return (
    <div className="main-contest-page-content">
      <div className="main-contest-page-content-title">
        <h1 className="author-name">Anudeep Sanapala</h1>
        <h1 className="main-content-page-title">Contest Title</h1>
        <p className="main-content-page-paragraph">
          We've been told it is possible to revolutionize the payment industry.
          We have not reinvented the wheel, we decided to build upon it -
          successfully. We've been told it is possible to revolutionize the
          payment industry. We have not reinvented the wheel, we decided to
          build upon it - successfully. We've been told it is possible to
          revolutionize the payment industry. We have not reinvented the wheel,
          we decided to build upon it - successfully.
        </p>
      </div>

      <div>
        <button className="main-button-for-contest">Catch the Flag</button>
      </div>
    </div>
  );
};

export default Contest_home;

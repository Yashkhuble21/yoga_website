import React from "react";

const Cardsexp = () => {
  return (
    <>
      <div className="mt-5 container d-flex justify-content-center">
        <p>TEAM</p> <br />
        <br />
        <h3>Meet With Experts</h3>
      </div>
      <div className="container h-25  d-flex gap-2">
        <div className="card d-line-block h-25 w-25 ">
          <img
            src={require("../images/exp1.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body align-items-center">
            <p className="card-text ">Pramven Kumar</p>
          </div>
        </div>
        <div className="card d-line-block h-25 w-25 ">
          <img
            src={require("../images/mickal.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body align-items-center">
            <p className="card-text ">Faizal Khalifa</p>
          </div>
        </div>
        <div className="card d-line-block h-25 w-25 ">
          <img
            src={require("../images/ajan.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body align-items-center">
            <p className="card-text ">Sam Das</p>
          </div>
        </div>
        <div className="card d-line-block h-25 w-25 ">
          <img
            src={require("../images/exp4.jpg")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body align-items-center">
            <p className="card-text ">Dhruvik Bhatt</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardsexp;

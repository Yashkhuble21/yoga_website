import React from "react";
import Cardsexp from "./Cardsexp";
import Footer from "./footer/Footer";

const Aboutus = () => {
  return (
    <>
      <div className="mt-1"></div>

      <div className="mt-3 h-50 w-100 container fs-1 align-center ">
        About us
      </div>
      <div className="mt-3 container bg-light align-center">
        <div className="container-md p-4 d-flex justify-content-between">
          <img
            src={require("../images/3.jpeg")}
            className="w-50 h-50 rounded-2"
            alt="..."
          />
          <div className="container-md p-4">
            <h1>Take Your Yoga To The Next Level With Yog </h1>Modern yoga
            consists of a range of techniques including asanas (postures) and
            meditation derived from some of the philosophies, teachings and
            practices of the Yoga school, which is one of the six schools of
            traditional Hindu philosophies, and organised into a wide variety of
            schools and denominations. It has been described by Elizabeth de
            Michelis as having four types, namely: Modern Psych osomatic Yoga,
            as in The Yoga Institute.
          </div>
        </div>
      </div>

      <Cardsexp />
      <Footer />
    </>
  );
};

export default Aboutus;

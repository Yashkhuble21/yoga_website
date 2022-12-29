import React from "react";
//import Cardclasses from "./Cardclasses";
import Cardsclasses from "./Cardsclasses";
import Footer from "./footer/Footer";

const Classes = () => {
  return (
    <>
      <div className="main">
        <div className="mt-3 mb-2 h-50 w-100 container fs-1 align-center ">
          Classes
        </div>
        {/* <Cardclasses /> */}
        <Cardsclasses />
      </div>
      <Footer />
    </>
  );
};

export default Classes;

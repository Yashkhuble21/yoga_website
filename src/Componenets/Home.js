import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slides from "./Slides";
import Cardsexp from "./Cardsexp";
import Footer from "./footer/Footer";

// import Slide from "./Slide";

const Home = () => {
  return (
    <>
      <div className="main">
        <Slides />
        {/* <Slide /> */}
        <div className=" container mt-5 mb-4 bg-light align-center">
          <div className="container-md p-4 d-flex justify-content-between">
            <img
              src={require("../images/home2.jpg")}
              class="w-50 h-50 rounded-2"
              alt="..."
            />
            <div className="container-md p-4">
              <h1>Take Your Yoga To The Next Level With Yog </h1>Lorem ipsum
              dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </div>
          </div>
        </div>
        <Cardsexp />
      </div>

      <div className="mt-5 container d-flex justify-content-center">
        <h3>Most Popular Classes</h3>
      </div>
      <div class="container mt-2">
        <div class="row">
          <div class="col">
            <div class="card" style={{ width: "19rem" }}>
              <img
                src={require("../images/classcard1.jpg")}
                class="card-img-top "
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Yoga for Beginners Course</h5>
                <p class="card-text">
                  6 Lessons
                  <br />
                  Meditation, Pranayama
                  <br />
                  <b>₹1500</b>
                  <h6>With Praveen kumar</h6>
                </p>

                <a href="/" class="btn btn-primary">
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "19rem" }}>
              <img
                src={require("../images/classcard2.jpg")}
                class="card-img-top "
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Self Care Through Ayurveda</h5>
                <p class="card-text">
                  5 Lessons
                  <br />
                  Pranayama
                  <br />
                  <b>₹1000</b>
                  <h6>With Faizal khalifa</h6>
                </p>

                <a href="/" class="btn btn-primary">
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{ width: "19rem" }}>
              <img
                src={require("../images/classcard3.jpg")}
                class="card-img-top "
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">The Smart Flow Yoga</h5>
                <p class="card-text">
                  6 Lessons
                  <br />
                  Meditation, Vinyasa Yoga
                  <br />
                  <b>₹500</b>
                  <h6>With Ram Das</h6>
                </p>
                <a href="/" class="btn btn-primary">
                  Purchase
                </a>
              </div>
            </div>
          </div>
          <div class="col ">
            <div class="card" style={{ width: "19rem" }}>
              <img
                src={require("../images/classcard4.jpg")}
                class="card-img-top "
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Nine days of Pranayama</h5>
                <p class="card-text">
                  7 Lessons
                  <br />
                  Pranayama, Vinyasa Yoga
                  <br />
                  <b>₹1500</b>
                  <h6>With Dhruvik Bhatt</h6>
                </p>

                <a href="/" class="btn btn-primary">
                  Purchase
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

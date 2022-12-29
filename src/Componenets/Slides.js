import Carousel from "react-bootstrap/Carousel";

function Slides() {
  return (
    <>
      <Carousel id="carousel" fade className="d-inline-block  m-auto w-100 ">
        <Carousel.Item>
          <img
            className="w-100 "
            src={require("../images/slideimg1.jpg")}
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>Yoga</h3>
            <p>Yoga is pies of art</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" w-100"
            src={require("../images/slideimg2.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Yoga</h3>
            <p>Yoga makes your body clam</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src={require("../images/slideimg3.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Yoga</h3>
            <p>Yoga is be.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100 "
            src={require("../images/slideimg4.jpg")}
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>Yoga</h3>
            <p>Yoga is pies of art</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section
        className="hero d-flex flex-column justify-content-center align-items-center "
        id="home"
      >
        {/* <div className="bg-overlay">
          <video autoPlay muted loop id="myvideo">
            <source src={require("../video/yoga1.mp4")}></source>
          </video>
        </div> */}
      </section>
    </>
  );
}

export default Slides;

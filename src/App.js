import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Componenets/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Login from "./Componenets/login/login";
// import Register from "./Componenets/register/register";
//import Footer from "./Componenets/footer/Footer";
//import Footer from "./Componenets/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        {/* <Footer /> */}
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;

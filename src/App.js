import "./App.css";
import Navbar from "./component/Navbar";
import { Footer } from "./component/Footer";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./Pages/About";
import Services from "./Pages/OurServices";
import { ContactUs } from "./Pages/ContactUs";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/our-services">
          <Navbar />
          <Services />
          <Footer />
        </Route>
        <Route path="/contact-us">
          <Navbar />
          <ContactUs />
          <Footer />
        </Route>
        <Route path="/about-us">
          <Navbar />
          <About />
          <Footer />
        </Route>
        <Route path="/">
          <Navbar />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

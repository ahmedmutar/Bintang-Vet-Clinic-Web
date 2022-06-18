import "./App.css";
import Navbar from "./component/Navbar";
import { Footer } from "./component/Footer";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./Pages/About";
import Services from "./Pages/OurServices";
import { ContactUs } from "./Pages/ContactUs";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/our-services" component={Services} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/about-us" component={About} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

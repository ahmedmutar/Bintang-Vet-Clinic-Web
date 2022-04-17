import "./App.css";
import Navbar from "./component/Navbar";
import { Footer } from "./component/Footer";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { About } from "./Pages/About";

function App() {
  return (
    <Router>
      <Switch>
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

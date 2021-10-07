import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Experiences from "./components/Experiences/Experiences";
import Works from "./components/Works/Works";
import Blog from "./components/Blog/Blog";
import SocialNetwork from "./components/SocialNetwork";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/experiences">
              <Experiences />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <SocialNetwork />
        </div>
      </Router>
    </div>
  );
}

export default App;

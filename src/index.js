import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Nature from "./components/Nature";
import AboutMe from "./components/AboutMe";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Route exact path="/" render={() => <Redirect to="/Home" />} />

          <Route path="/home" component={Home} />
          <Route path="/Nature" component={Nature} />
          <Route path="/AboutMe" component={AboutMe} />
        </div>
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

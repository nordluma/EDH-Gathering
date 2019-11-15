import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./component/layout/Header";
import Home from "./component/Home";
import Cards from "./component/pages/Cards";
import CardDetails from "./component/pages/CardDetails";
import Commanders from "./component/pages/Commanders";
import Footer from "./component/layout/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cards" component={Cards} />
          <Route path="/cards/:id" component={CardDetails} />
          <Route exact path="/commanders" component={Commanders} />
        </Switch>
        <div className="container"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

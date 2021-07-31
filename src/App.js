import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import "./index.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/integration" component={Home} />
        <Route exact path="/pricing" component={Home} />
        <Route exact path="/about-us" component={Home} />
        <Route exact path="/blog" component={Home} />
      </Switch>
    </>
  );
};
export default App;

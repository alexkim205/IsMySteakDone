import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Levels from "./Levels";
import Palm from "./Palm";
import Face from "./Face";
import Fist from "./Fist";
import CheatSheet from "./CheatSheet";
import Quiz from "./Quiz";

const Navigator = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/levels">
        <Levels />
      </Route>
      <Route path="/palm">
        <Palm />
      </Route>
      <Route path="/face">
        <Face />
      </Route>
      <Route path="/fist">
        <Fist />
      </Route>
      <Route path="/cheat-sheet">
        <CheatSheet />
      </Route>
      <Route path="/quiz/:scenario?/:q?">
        <Quiz />
      </Route>
    </Switch>
  );
};

export default Navigator;

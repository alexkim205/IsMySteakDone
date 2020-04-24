import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactBreakpoints from "react-breakpoints";

import { breakpoints } from "../../helper";
import { RootBackground, Body } from "./style";
import Navbar from "../Navbar";
import Navigator from "../Navigator";
import Footer from "../Footer";

const App = () => {
  return (
    <ReactBreakpoints breakpoints={breakpoints}>
      <Router basename={process.env.PUBLIC_URL}>
        <RootBackground>
          <Navbar />
          <Body>
            <Navigator />
          </Body>
          <Footer />
        </RootBackground>
      </Router>
    </ReactBreakpoints>
  );
};

export default App;

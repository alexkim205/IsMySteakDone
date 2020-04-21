import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import {RootBackground, Body} from "./style";
import Navbar from "../Navbar";
import Navigator from "../Navigator";
import Footer from "../Footer";

const App = () => {
  return (
    <Router>
      <RootBackground>
        <Navbar />
        <Body>
          <Navigator />
        </Body>
        <Footer />
      </RootBackground>
    </Router>
  );
};

export default App;

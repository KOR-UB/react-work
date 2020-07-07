import React from "react";
import {HashRouter, BrowserRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

import MyHome from "./routes/MyHome";
import AboutMe from "./routes/AboutMe";
import Resume from "./routes/Resume";
import Contact from "./routes/Contact";

function App() {
  return (
    <>
      {/* <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter> */}
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={MyHome} />
        <Route path="/about" component={AboutMe} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </HashRouter>
    </>
  );
}

export default App;

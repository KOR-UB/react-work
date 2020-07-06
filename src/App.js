import React from "react";
import {HashRouter, BrowserRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import MyHome from "./routes/MyHome";
import About from "./routes/About";
import AboutMe from "./routes/AboutMe";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

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
        {/* <Route path="/movie/:id" component={Detail} /> */}
      </HashRouter>
    </>
  );
}

export default App;

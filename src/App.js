import React from "react";
import { HashRouter, Route } from "react-router-dom";
import CounterContext from "./context/CounterContext";
import ScaFc from "./pages/ScaFc";
import Home from "./pages/Home";
import Tada from "./pages/Tada";
import MyNav from "./components/MyNav";
import Line from "./pages/Line";
import Starbucks from "./pages/Starbucks";
import Jnews from "./pages/Jnews";
import Weather from "./pages/Weather";
import Todos from "./pages/Todos";
import Instagram from "./pages/Instagram";
import Hobby from "./pages/Hobby";

function App() {
  return (
    <>
      <HashRouter>
        <MyNav />
        <Route path="/hobby" component={Hobby} />
        <Route path="/instagram" component={Instagram} />
        <Route path="/todos" component={Todos} />
        <Route path="/weather" component={Weather} />
        <Route path="/jnews" component={Jnews} />
        <Route path="/starbucks" component={Starbucks} />
        <Route path="/line" component={Line} />
        <Route path="/tada" component={Tada} />
        <Route path="/" exact component={Home} />
      </HashRouter>
    </>
  );
}

export default App;

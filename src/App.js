import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import Shoppage from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;

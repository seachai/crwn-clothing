import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shop/Shop";
import Header from "./Components/Header/Header";
import LoginAndRegister from "./Pages/LoginAndRegister/LoginAndRegister";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={LoginAndRegister} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Homepage/Homepage";
import ShopPage from "./Pages/Shop/Shop";
import LoginAndRegister from "./Pages/LoginAndRegister/LoginAndRegister";
import Header from "./Components/Header/Header";
import { auth } from "./Firebase/Firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

export default App;
